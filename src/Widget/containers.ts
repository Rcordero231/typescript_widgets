import Container from './Container';


class LeftLeaningContainer extends Container{
    constructor(){
        super()
        this.borderRadius = '10% 25%'
    }
}


class RightLeaningContainer extends Container{
    constructor(){
        super()
        this.borderRadius = '25% 10%'
    }
}


class CircleContainer extends Container{
    constructor(){
        super()
        this.borderRadius = '50%'
    }
}

class ThickContainer extends Container {
    constructor(){
        super();
        this.borderWidth = '10px'
    }
}

class ThickCircle extends Container {
    constructor(){
        super();
        this.borderRadius = '50%'
        this.borderWidth = '10px'
    }
}

// // class DottedSquare extends Container{
// //     constructor(){
// //         super();

// //     }
// }


export {
    LeftLeaningContainer,
    RightLeaningContainer,
    CircleContainer,
    ThickContainer,
    ThickCircle
}
