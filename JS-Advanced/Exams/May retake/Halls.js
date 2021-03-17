function solveClasses() {

    class Hall {
        capacity = 0;
        name = '';
        events = [];

        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
        }

        hallEvent(title) {
            if (this.events.indexOf(title) > 0) {
                throw new Error("This event is already added!")
            }
            this.events.push(title);
            return 'Event is added.'
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`
        }

        toString() {
            if (this.events.length > 0) {
                return `${this.name} hall - ${this.capacity}\nEvents: ${this.events.join(", ")}`
            }
            return `${this.name} hall - ${this.capacity}`
        }
    }

    class MovieTheater extends Hall {
        capacity = 0;
        name = '';
        screenSize = 0;

        constructor(capacity, name, screenSize) {
            super(capacity, name)
            this.capacity = capacity;
            this.name = name;
            this.screenSize = screenSize;
        }

        close() {
            this.events = [];
            return `${super.close()}All screenings are over.`;
        }

        toString() {
            if (this.events.length > 0) {
                return `${super.toString()}\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;
            }
            return `${super.toString()}`;
        }
    }

    class ConcertHall extends Hall {
        capacity = 0;
        name = '';
        events = [];

        constructor(capacity, name) {
            super(capacity, name)
            this.capacity = capacity;
            this.name = name;
        }

        hallEvent(title, performers) {
            this.performers = performers;
            return super.hallEvent(title);
        }

        toString() {
            if (this.events.length > 0) {
                return `${super.toString()}\nPerformers: ${this.performers.join(', ')}.`;
            }
            return `${super.toString()}`;
        }

        close() {
            return `${super.close()}All performances are over.`;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}