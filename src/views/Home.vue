<template>
<div class="contentDiv pt-2">
    <b-carousel id="carousel-1" :interval="4000" controls indicators background="#ababab" img-width="1024" img-height="400" style="text-shadow: 1px 1px 2px #333">
        <b-carousel-slide >
            <template #img>
                <img class="d-block w-80 m-auto" width="1024" height="400" src="../assets/banner/banner1.jpg" alt="image slot" />
            </template>
        </b-carousel-slide>
        <b-carousel-slide >
            <template #img>
                <img class="d-block w-80 m-auto" width="1024" height="400" src="../assets/banner/banner8.jpg" alt="image slot" />
            </template>
        </b-carousel-slide>
        <b-carousel-slide >
            <template #img>
                <img class="d-block w-80 m-auto" width="1024" height="400" src="../assets/banner/banner2.jpg" alt="image slot" />
            </template>
        </b-carousel-slide>
        <b-carousel-slide >
            <template #img>
                <img class="d-block w-80 m-auto" width="1024" height="400" src="../assets/banner/banner3.jpg" alt="image slot" />
            </template>
        </b-carousel-slide>
        <b-carousel-slide >
            <template #img>
                <img class="d-block w-80 m-auto" width="1024" height="400" src="../assets/banner/banner4.jpg" alt="image slot" />
            </template>
        </b-carousel-slide>
        <b-carousel-slide >
            <template #img>
                <img class="d-block w-80 m-auto" width="1024" height="400" src="../assets/banner/banner7.jpg" alt="image slot" />
            </template>
        </b-carousel-slide>
    </b-carousel>
    <b-container>
    <b-container fluid>
      <p class="mb-0">For more information call Sujit Patil - (932-108-2828) / Shailendra Rumade (+91 8767210834).</p>
        <b-row class="pb-3 pt-2">
            <b-col lg="4" sm="12">
                <h4><b>Product Enquiry</b></h4>
                <b-form>
                    <b-form-group id="input-group-1" label="" label-for="input-1">
                        <b-form-input id="input-1" type="text" placeholder="Company Name"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label="" label-for="input-1">
                        <b-form-input id="input-2" type="text" placeholder="Person Name"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label="" label-for="input-1">
                        <b-form-input id="input-3" type="number" placeholder="Mobile Number"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label="" label-for="input-1">
                        <b-form-input id="input-4" type="email" placeholder="Email"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label="" label-for="input-1">
                        <b-form-textarea id="textarea" placeholder="Requirement" rows="3" max-rows="6"></b-form-textarea>
                    </b-form-group>

                    <b-button @click="makeToast('info')" block variant="theme-blue">Submit</b-button>
                </b-form>
            </b-col>
            <b-col lg="8" sm="12" >
            <div id="partsDiv">
                <div class="rowDiv">
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/1.png" fluid alt="Fluid image" />
                    </b-col>
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/parts/1.png" fluid alt="Fluid image" />
                    </b-col >
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/2.png" fluid alt="Fluid image" />
                    </b-col>
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/parts/3.png" fluid alt="Fluid image" />
                    </b-col>
                    
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/3.png" fluid alt="Fluid image" />
                    </b-col>
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/parts/2.png" fluid alt="Fluid image" />
                    </b-col>
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/8.png" fluid alt="Fluid image" />
                    </b-col>
                    <b-col md="4">
                        <img class="thumbImg" src="../assets/parts/4.png" fluid alt="Fluid image" />
                    </b-col>
                </div>
                </div>
                <p class="mb-0">
                    We manufacture charge parts for tablets, capsules, soft gel tab, injection with compatible for all types of blister packing machines.
                </p>
                <div>
                    <button type="button" class="btn btn-sm btn-theme-blue btn-rounded float-left">
                        Read More
                    </button>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="4" sm="12">
                <img class="bannerImg" src="../assets/4.png" fluid alt="Fluid image" />
            </b-col>
            <b-col lg="4" sm="12">
                <img class="bannerImg" src="../assets/6.png" fluid alt="Fluid image" />
            </b-col>
            <b-col lg="4" sm="12">
                <img class="bannerImg" src="../assets/7.jpg" fluid alt="Fluid image" />
            </b-col>
        </b-row>
    </b-container>
    <div class="d-flex justify-content-center mb-1 mt-3">
        <p style="margin: 0 80px">
            "We Exceed Customer Expectation by Delivering the Best Product With Quality Service-by adopting & devising Advance Manufacturing Techniques to Enhance Quality."
        </p>
    </div>
    </b-container>
    <div class="bottom-div">
        <div>
            <img class="w-10 mb-2" src="../assets/radiotherapy.svg" fluid alt="Fluid image" />
            <h6 class="mb-0">Machineries</h6>
        </div>
        <div>
            <img class="w-10 mb-2" src="../assets/parts.svg" fluid alt="Fluid image" />
            <h6 class="mb-0">Change Parts</h6>
        </div>
        <div>
            <img class="w-10 mb-2" src="../assets/technical.svg" fluid alt="Fluid image" />
            <h6 class="mb-0">Servicing & Repairing</h6>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    data() {
        return {};
    },
    name: "Home",
    components: {},
    methods: {
        makeToast(variant = null) {
            this.$bvToast.toast('Thank You for submitting the enquiry', {
                title: `Done!`,
                variant: variant,
                solid: true,
                toaster: 'b-toaster-top-center',
                autoHideDelay: 1000,
            })
        }
    }
};
</script>
