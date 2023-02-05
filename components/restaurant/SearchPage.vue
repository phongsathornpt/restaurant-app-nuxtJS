<template>
    <div class="mt-5">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="ชื่อร้านอาหาร"
                label-for="input-1"
                description="ค้นหาร้านอาหารที่อยากกิน"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    placeholder="Enter name of restaurant"
                    required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <Loading :status="loading" />
        <ListRestaurants
            :status="listRestaurantsStatus"
            :listRestaurants="listRestaurants"
        />
    </div>
</template>

<script>
import Loading from '@/components/restaurant/Loading.vue'
import ListRestaurants from '@/components/restaurant/ListRestaurants.vue'
export default {
    data() {
        return {
            latitude: '',
            longitude: '',
            form: {
                name: '',
            },
            show: false,
            loading: true,
            listRestaurantsStatus: false,
            listRestaurants: [],
        }
    },
    async mounted() {
        if (localStorage.latitude && localStorage.longitude) {
            await this.asignLocationFromSession(
                localStorage.latitude,
                localStorage.longitude
            )
        } else {
            navigator.geolocation.getCurrentPosition((location) => {
                this.latitude = location.coords.latitude
                this.longitude = location.coords.longitude
                localStorage.latitude = location.coords.latitude
                localStorage.longitude = location.coords.longitude
                this.show = true
                this.loading = false
                this.preLoadRestaurant()
            })
        }
    },
    methods: {
        async asignLocationFromSession(latitude, longitude) {
            this.latitude = latitude
            this.longitude = longitude
            await this.preLoadRestaurant()
            this.show = true
            this.loading = false
        },
        async preLoadRestaurant() {
            const payload = {
                name: 'Bang sue',
                latitude: this.latitude,
                longitude: this.longitude,
            }
            const { data, responseCode } = await this.$axios.$post(
                '/api/gmap/searchbyname',
                payload
            )
            if (responseCode == 200) {
                this.loading = false
                this.listRestaurantsStatus = true
                this.listRestaurants = [...data]
            }
        },
        async onSubmit(event) {
            event.preventDefault()
            this.listRestaurantsStatus = false
            const payload = {
                name: this.form.name,
                latitude: this.latitude,
                longitude: this.longitude,
            }
            this.loading = true
            this.show = true
            const { data, responseCode } = await this.$axios.$post(
                '/api/gmap/searchbyname',
                payload
            )
            if (responseCode == 200) {
                this.loading = false
                this.show = true
                this.listRestaurantsStatus = true
                this.listRestaurants = [...data]
            }
        },
        async onReset(event) {
            event.preventDefault()
            this.form.name = ''
            this.$nextTick(() => {
                this.show = true
            })
        },
    },
    components: {
        Loading,
        ListRestaurants,
    },
}
</script>
