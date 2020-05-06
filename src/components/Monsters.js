import React, { Component } from 'react'
import { CardList } from './card-list/card-list.component'

export class Monsters extends Component {
    constructor(){
        super()
        this.state = {
            monsters: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(response => this.setState({
            monsters: response
        }))
    }
    
    render() {
        return (
            <div>
                <CardList name="Om Raman">
                    {this.state.monsters.map((monster => <h1 key= {monster.id}>{monster.name}</h1>))}
                </CardList>
            </div>
        )
    }
}

export default Monsters
