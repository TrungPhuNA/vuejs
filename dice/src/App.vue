<template>
	<div id="app">
        <div class="wrapper clearfix">
            <!-- // sử dụng props truyền dữ liệu cha sang con -->
            <Players 
                v-bind:scoresPlayer="scoresPlayer"
                v-bind:activePlayer="activePlayer"
                v-bind:currenScore="currenScore"
            />
            <Controls
                v-on:handleNewGame="handleNewGame"
                v-on:handleRollDice="handleRollDice"
                v-on:handleHoldScore="handleHoldScore"
             />
            <Dices v-bind:dice="dice"/>
            <PopupRule 
                v-bind:isPopup="isPopup"
                v-on:handleClosePopup="handleClosePopup"
            />
        </div>
	</div>
</template>

/**

    - props Truyền dữ liệu từ comp cha sang con
        + Chú pháp giống thuộc tính => Ràng buộc thuộc tính
        + Sử dụng v-bind để ràng buộc 
        - props down  chỉ truyền dữ liệu cha vào con 
        - event up : Truyền thông điêp cho component cha biết nó muốn thay đổi dữ liệu  -> Nhiệm cụ 
        compoent cha là nhận thông điệp và thay đổi  -> customer events   
 */
<script>

import Players from './components/Players'
import Controls from './components/Controls'
import Dices from './components/Dices'
import PopupRule from './components/PopupRule'

export default {
	name: 'app',
	data () {
        return {
            isPopup : false,
            isPlayer : false,
            activePlayer :0,
            dice : [1,5],
            scoresPlayer : [13, 310],
            currenScore : 30
        }
    },
    components: {
        Players,
        Controls,
        Dices,
        PopupRule
    },
    methods : {
        nextPlayer() {
            this.activePlayer = this.activePlayer === 0 ? 1 : 0;
            this.currenScore = 0;
        },
        handleNewGame() {
            // hien thi popup show luat choi
            console.log("init new game App");
            this.isPopup = true;
        },
        handleClosePopup() {
            this.isPopup = false;
            this.isPlayer = true;
            this.activePlayer = 0;
            this.scoresPlayer = [0,0];
            this.currenScore = 0;
            this.dice = [1,1]
        },
        handleHoldScore() {
            if (this.isPlayer) {
                // activePlayout = 0 | 1
                // 1 = ||2 
                let { scoresPlayer, activePlayer, currenScore } = this;
                let oldScores = scoresPlayer[this.activePlayer];
                this.scoresPlayer[activePlayer] =  oldScores + currenScore;
                console.log(this.scoresPlayer);
                // this.scoresPlayer[this.activePlayer] = this.scoresPlayer;
                // [this.activePlayer] + this.currenScore;
            }else{
                alert("Vui Lòng New Game");
            }
            console.log("init --handleHoldScore");
        },
        handleRollDice() {
            if (this.isPlayer) {
                // xoay 
                // mathmath
                var dice1 = Math.floor(Math.random() * 6) + 1;
                var dice2 = Math.floor(Math.random() * 6) + 1;
                this.dice = [dice1, dice2];
                if (dice1 == 1 || dice2 == 1) {
                    this.scoresPlayer = [0,0];
                    this.nextPlayer();
                }else{
                    this.currenScore += dice1 + dice2
                }

            }else {
                alert(" Vui lòng nhấn nút new game");
            }
            console.log('init handleRollDice');
        }
    }
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
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
        background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/back.jpg');
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
