import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {

    render() {
        let title
        if (this.props.isWinner) {
            title = <h2 className="Pokedex-winner">Winning Player</h2>
        }
        else {
            title = <h2 className="Pokedex-loser">Losing Player</h2>
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">

                    {this.props.pokemon.map((p) => (
                        <Pokecard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            base_experience={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Pokedex;