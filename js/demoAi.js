/**
 * Example of randomly moving AI (it sucks, you probably shouldn't use it).
 */
tronament.aiModule("demo-ai", function() {
    var direction = 1;

    /**
     * Moves based on some randomness and some checks.
     */
    this.move = function() {
        var move = Math.floor((Math.random() * 200) + 1);

        if (move == tronament.DIRECTION_RIGHT && this.directionIsSafe(move)) {
            direction = tronament.DIRECTION_RIGHT;
        } else if (move == tronament.DIRECTION_DOWN && this.directionIsSafe(move)) {
            direction = tronament.DIRECTION_DOWN;
        } else if (move == tronament.DIRECTION_LEFT && this.directionIsSafe(move)) {
            direction = tronament.DIRECTION_LEFT;
        } else if (move == tronament.DIRECTION_UP && this.directionIsSafe(move)) {
            direction = tronament.DIRECTION_UP;
        }

        if (!this.directionIsSafe(direction)) {
            if (this.directionIsSafe(tronament.DIRECTION_RIGHT)) {
                direction = tronament.DIRECTION_RIGHT;
            } if (this.directionIsSafe(tronament.DIRECTION_DOWN)) {
                direction = tronament.DIRECTION_DOWN;
            } if (this.directionIsSafe(tronament.DIRECTION_LEFT)) {
                direction = tronament.DIRECTION_LEFT;
            } if (this.directionIsSafe(tronament.DIRECTION_UP)) {
                direction = tronament.DIRECTION_UP;
            }
        }

        return direction;
    }

    /**
     * Makes sure a given direction is a safe move.
     */
    this.directionIsSafe = function(direction) {
        if (direction == tronament.DIRECTION_RIGHT && tronament.query(this.x + 1, this.y)) {
            return false;
        } else if (direction == tronament.DIRECTION_DOWN && tronament.query(this.x, this.y + 1)) {
            return false;
        } else if (direction == tronament.DIRECTION_LEFT && tronament.query(this.x - 1, this.y)) {
            return false;
        } else if (direction == tronament.DIRECTION_UP && tronament.query(this.x, this.y - 1)) {
            return false;
        }
        return true;
    }
});