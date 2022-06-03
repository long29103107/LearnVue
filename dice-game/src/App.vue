<template>
  <div class="wrapper clearfix">
    <player
      :scoresPlayer="scoresPlayer"
      :activePlayer="activePlayer"
      :currentScore="currentScore"
      :isWinner="isWinner"
    />

    <control
      @handleNewGame="handleNewGame"
      @handleRollDice="handleRollDice"
      @handleHoldScore="handleHoldScore"
      :finalScore="finalScore"
      @handleChangeFinalScore="handleChangeFinalScore"
      :isPlaying="isPlaying"
    />

    <dice :dices="dice" />

    <popup-rule :isOpenPopup="isOpenPopup" @handleConfirm="handleConfirm" />
  </div>
</template>

<script>
import Player from "./components/Player";
import Control from "./components/Control";
import Dice from "./components/Dice";
import PopupRule from "./components/PopupRule";

export default {
  name: "App",
  data() {
    return {
      activePlayer: 0,
      scoresPlayer: [0, 0],
      currentScore: 0,
      dice: [5, 5],
      isOpenPopup: false,
      isPlaying: false,
      finalScore: 10,
    };
  },
  components: {
    Player,
    Control,
    Dice,
    PopupRule,
  },
  computed: {
    isWinner() {
      let { scoresPlayer, finalScore } = this;
      if (scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore) {
        this.isPlaying = false;
        return true;
      }
      return false;
    },
  },
  methods: {
    handleChangeFinalScore(e) {
      let number = parseInt(e.target.value);
      if (isNaN(number)) {
        this.finalScore = "";
      } else {
        this.finalScore = number;
      }
    },
    nextPlayer() {
      this.activePlayer = this.activePlayer == 0 ? 1 : 0;
      this.currentScore = 0;
    },
    handleRollDice() {
      if (this.isPlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        this.dice = [dice1, dice2];

        if (dice1 == 1 || dice2 == 1) {
          this.nextPlayer();
          let activePlayer = this.activePlayer;
          setTimeout(() => {
            alert(`Người chơi ${activePlayer + 1} đã quay trúng số 1`);
          }, 1000);
        } else {
          this.currentScore = this.currentScore + dice2 + dice1;
        }
      } else {
        alert("Vui lòng nhấn vào lúc new game");
      }
    },
    handleNewGame() {
      this.isOpenPopup = true;
    },
    handleConfirm() {
      this.isOpenPopup = false;
      this.isPlaying = true;
      this.activePlayer = 0;
      this.scoresPlayer = [0, 0];
      this.currentScore = 0;
      this.dice = [1, 1];
    },
    handleHoldScore() {
      if (this.isPlaying) {
        let { scoresPlayer, activePlayer, currentScore } = this;
        let scoreOld = scoresPlayer[activePlayer];

        // let cloneScorePlayer = [...scoresPlayer];
        // cloneScorePlayer[activePlayer] = scoreOld + currentScore;
        // this.scoresPlayer = [...cloneScorePlayer];

        this.$set(this.scoresPlayer, activePlayer, scoreOld + currentScore);

        if (!this.isWinner) {
          this.nextPlayer();
        }
      } else {
        alert("Vui lòng nhấn vào lúc new game");
      }
    },
  },
};
</script>

<style>
/**********************************************
*** GENERAL
**********************************************/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url("../public/assets/back.jpg");
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
