<template>
  <v-dialog
    v-model="visible"
    overlay-opacity="0.8"
    width="unset"
    persistent
  >
    <div class="progress">
      <v-progress-circular
        width="10"
        size="100"
        color="#EC1F72"
        indeterminate
      />
      <dl class="text">
        <dt>{{text}}</dt>
        <dd>잠시만 기다려주세요</dd>
      </dl>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props:[
    'text'
  ],
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    open(value){
      this.visible = value;
      setTimeout(this.modalClose, 1500);
    },
    modalClose(){
      this.visible = false
    }
  }
  
}
</script>

<style lang="scss" scoped>

.progress{
  background:#fff;
  padding:50px;
  text-align:center;
  border-radius:15px;

  dl{
    margin-top:40px;
    text-align:center;

    dt{font-size:32px;font-weight:500;}
    dd{font-size:18px;color:#888;margin-top:5px;}
  }
}


</style>