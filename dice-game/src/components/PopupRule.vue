<template>
  <div class="wrapper-popup" :class="getClassPopup">
    <div class="rule">
      <h3>Luật chơi</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quam,
        possimus, explicabo voluptates iusto deleniti, sunt alias molestiae
        magni repellendus adipisci praesentium consequatur laborum. Itaque
        cumque maxime dolores molestiae doloremque?
      </p>
      <div class="button">
        <button @click="confirm" class="confirm">Đã hiểu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-rule",
  props: {
    isOpenPopup: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    getClassPopup() {
      return {
        "open-popup": this.isOpenPopup,
      };
    },
  },
  methods: {
    confirm() {
      this.$emit("handleConfirm");
    },
  },
};
</script>

<style>
.wrapper-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  -webkit-transition-property: all;
  -webkit-transition-timing-function: ease;
  -webkit-transition-duration: 0.3s;
}
.wrapper-popup.open-popup {
  opacity: 1;
  visibility: visible;
}
.rule {
  position: absolute;
  background-color: white;
  width: 300px;
  top: 50%;
  left: 50%;
  font-family: Arial, Helvetica, sans-serif;
  padding: 30px;
  transform: translate(-50%, -50%) scale(1.2);
  -webkit-transform: translate(-50%, -50%) scale(1.2);
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  -webkit-transition-property: all;
  -webkit-transition-timing-function: ease;
  -webkit-transition-duration: 0.3s;
}
.open-popup .rule {
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}
.rule h3 {
  margin-bottom: 10p;
}
.rule .confirm {
  margin-top: 20px;
  cursor: pointer;
  border: 2px solid #333;
  background-color: white;
  padding: 8px 15px;
}
.rule .confirm:hover {
  color: #fff;
  background-color: #333;
}
.rule .button {
  display: flex;
  justify-content: flex-end;
}
</style>