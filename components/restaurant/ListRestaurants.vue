<template>
    <div v-if="status">
        List restaurant
        <div v-for="item in listRestaurants" :key="item.id">
            <b-row class="mb-4">
                <b-col>
                    <b-img-lazy
                        thumbnail
                        fluid
                        rounded="top"
                        alt="Circle image"
                        :src="item.img"
                    ></b-img-lazy>
                </b-col>
                <b-col cols="11" class="text-left">
                    <b-row>
                        <b-col cols="8"
                            >{{ item.name }}
                            <b-badge
                                :variant="
                                    item.business_status === 'OPERATIONAL'
                                        ? 'info'
                                        : 'secondary'
                                "
                                >{{
                                    item.business_status === 'OPERATIONAL'
                                        ? 'เปิด'
                                        : 'ปิด'
                                }}</b-badge
                            >
                            <br />
                            ระยะทาง :: {{ item.distance }} km
                        </b-col>
                        <b-col>คะแนน :: {{ item.rating }}</b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: Boolean,
        listRestaurants: {
            name: String,
            icon: String,
            icon_background_color: String,
            business_status: String,
            distance: Number,
            rating: Number,
            location: {
                latitude: Number,
                longitude: Number,
            },
        },
    },
}
</script>
