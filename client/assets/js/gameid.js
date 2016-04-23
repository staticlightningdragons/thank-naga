var gameid_count = 0,
    string_gameid,
    int_gameid;

var GameID = {
    preload : function() {
        game.load.image('host', './assets/images/game_id.png');
        game.load.image('join', './assets/images/game_prompt.png');

        // align canvas
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },

    create : function() {
        this.add.sprite(0, 0, 'host');
        this.add.sprite(0, 0, 'join');

        if(bool_host == 0) {
            game_prompt = this.add.sprite(0, 0, 'join');

            string_gameid = game.add.text(game.world.centerX-225, game.world.centerY, "", {
                font: "42px Playfair Display",
                boundsAlignH: "center",
                boundsAlignV: "middle",
                fill: "#ffffff"
            });

            string_gameid.setTextBounds(0, 0, 450, 100);

            // keyboard input assignments
            enterButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            deleteButton = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);

            return0 = game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
            return1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
            return2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
            return3 = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
            return4 = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
            return5 = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
            return6 = game.input.keyboard.addKey(Phaser.Keyboard.SIX);
            return7 = game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
            return8 = game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
            return9 = game.input.keyboard.addKey(Phaser.Keyboard.NINE);

            enterButton.onDown.add(this.store_game_id, this);
            deleteButton.onDown.add(this.clear_game_id, this);
            return0.onDown.add(this.push_0, this); 
            return1.onDown.add(this.push_1, this); 
            return2.onDown.add(this.push_2, this); 
            return3.onDown.add(this.push_3, this); 
            return4.onDown.add(this.push_4, this); 
            return5.onDown.add(this.push_5, this); 
            return6.onDown.add(this.push_6, this); 
            return7.onDown.add(this.push_7, this); 
            return8.onDown.add(this.push_8, this); 
            return9.onDown.add(this.push_9, this); 
        }

        if(bool_host == 1) {
            game_id = this.add.sprite(0, 0, 'host');
        }
    },

    push_0 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("0"); 
            gameid_count++;
        }
    },

    push_1 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("1"); 
            gameid_count++;
        }
    },

    push_2 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("2"); 
            gameid_count++;
        }
    },

    push_3 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("3"); 
            gameid_count++;
        }
    },

    push_4 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("4"); 
            gameid_count++;
        }
    },

    push_5 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("5"); 
            gameid_count++;
        }
    },

    push_6 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("6"); 
            gameid_count++;
        }
    },

    push_7 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("7"); 
            gameid_count++;
        }
    },

    push_8 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("8"); 
            gameid_count++;
        }
    },

    push_9 : function() {
        if(gameid_count < 10) {
            string_gameid.text = string_gameid.text.concat("9"); 
            gameid_count++;
        }
    },

    // clear string_gameid 
    clear_game_id : function() {
        gameid_count = 0;
        string_gameid.destroy();
        string_gameid = game.add.text(game.world.centerX-225, game.world.centerY, "", {
            font: "42px Playfair Display",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            fill: "#ffffff"
        });
        string_gameid.setTextBounds(0, 0, 450, 100);
    },

    store_game_id : function() {
      int_gameid = Math.floor(string_gameid.text);
      //console.log(string_gameid);
      console.log(string_gameid.text);
      console.log(int_gameid);
    }
};
