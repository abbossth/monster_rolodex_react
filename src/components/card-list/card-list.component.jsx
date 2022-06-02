import { Component } from 'react'
import "./card.styles.css"
import "./card-list.styles.css"

class CardList extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div>
            {monsters.map((monster) => {
                return (
                    <div key={monster.id}>
                        <h1>{monster.name}</h1>
                    </div>
                    );
                })}
            </div>
        )
    }
}

export default CardList