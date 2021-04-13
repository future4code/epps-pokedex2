import React from "react";
import { BASE_URL } from "../../Constants/axios"
import { useParams } from "react-router-dom"
import { useRequestData } from "../../Hooks/useRequestData"
import { Container, NamePoke, ImgPoke, BoxDetail, BoxPower, BoxType, BoxAttack, Title } from './pokemonDetail-styled'

const PokemonDetailPage = () => {
    const pathParams = useParams();
    const data = useRequestData(`${BASE_URL}/${pathParams.pokemonName}`, {})

    return (

        <Container>
            <NamePoke>{data.name}</NamePoke>
            {data.sprites &&
                <div>
                    <div>
                        <ImgPoke src={data.sprites.front_default} alt=''/>
                        <ImgPoke src={data.sprites.back_default} alt=''/>
                    </div>
                    <BoxDetail>
                        <BoxPower>
                            <Title>Poderes</Title>
                            {data.stats.map(detail => {
                                return <p><strong>{detail.stat.name}: </strong>{detail.base_stat}</p>
                            })}
                        </BoxPower>
                        <div>
                            <BoxType>
                                <Title>Tipo</Title>
                                {data.types.map(type => {
                                    return <p>{type.type.name}</p>
                                })}
                            </BoxType>
                            <BoxAttack>
                                <Title>Principais ataques</Title>
                                {data.moves.map((move, index) => {
                                    return index < 5 && <p>{move.move.name}</p>
                                })}
                            </BoxAttack>
                        </div>
                    </BoxDetail>
                </div>
            }
        </Container>
    )
}

export default PokemonDetailPage