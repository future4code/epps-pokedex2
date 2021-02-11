import React from "react";
import { BASE_URL } from "../../Constants/axios"
import { useParams } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData"

const PokemonDetailPage = () => {
    const params = useParams()
    const data = useRequestData(`${BASE_URL}/${params.pokeName}`, {})

    return (
        <div>
            {data.sprites && 
                <div>
                    <div>
                        <img src={data.sprites.front_default} alt=''/> 
                        <img src={data.sprites.back_default} alt=''/>
                    </div>
                    <div>
                        <div>Poderes</div>
                        {data.stats.map(detail => {
                            return <p><strong>{detail.stat.name}: </strong>{detail.base_stat}</p>
                        })}
                    </div>
                    <div>
                        <div>
                            {data.types.map(type => {
                                return <p>{type.type.name}</p>
                            })}
                        </div>
                        <div>
                            <div>Principais ataques</div>
                            {data.moves.map((move, index) => {
                                return index < 5 && <p>{move.move.name}</p>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PokemonDetailPage