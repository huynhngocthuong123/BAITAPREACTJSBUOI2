import React, { Component } from 'react'

export default class UIChangeGlass extends Component {
    arrayGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];
    state = {
        glassChange: {}
    }
    renderListGlass = () => {
        return this.arrayGlass.map((item) => {
            return <div className='img-glass' key={item.id}>
                <img onClick={() => {
                    this.setState({ glassChange: item })
                }} src={item.url} alt="" />
            </div>
        })
    }
    render() {
        return (
            <div className='Glass'>
                <div className="changeGlass">
                    <div className="img">
                        <img src="../glassesImage/model.jpg" alt="" />
                    </div>
                    <div className="change">
                        <img src={this.state.glassChange.url} alt="" />
                    </div>
                    <div className="content">
                        <div className="name">
                            <h1>{this.state.glassChange.name}</h1>
                        </div>
                        <div className="desc">
                            <p>{this.state.glassChange.desc}</p>
                        </div>
                        <div className="price">
                            <h1>{this.state.glassChange.price}</h1>
                        </div>
                    </div>
                </div>
                <div className="listGlass">
                    {this.renderListGlass()}
                </div>
            </div>
        )
    }
}

