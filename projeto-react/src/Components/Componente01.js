import style from './Componente01.css';
import batom from '../Assets/batom.jpeg';
import gloss from '../Assets/Gloss.jpeg';
import base from '../Assets/base.jpeg';

const Componente01 = () => {
    return (
        <div className="conteudo">
            <div className="cards batom">
                <img src={batom} alt="#" />
                <p>
                    O batom "Brilho Sutil" é uma opção perfeita para realçar os
                    lábios com um toque de glamour discreto. Sua tonalidade
                    suave e luminosa adiciona um brilho sutil, proporcionando um
                    visual natural e elegante.
                </p>
                <button className="comprar">Comprar</button>
            </div>

            <div className="cards gloss">
                <img src={gloss} alt="#" />
                <p>
                    O gloss "Brilho Encantador" é um verdadeiro encanto em forma
                    de produto para os lábios. Com sua fórmula especial, ele
                    oferece um brilho irresistível e radiante, deixando os
                    lábios com um aspecto luminoso e sedutor.
                </p>
                <button className="comprar">Comprar</button>
            </div>

            <div className="cards base">
                <img src={base} alt="#" />
                <p>
                    A base "Perfeição Natural" é a aliada perfeita para
                    conquistar uma pele impecável e com aspecto natural. Sua
                    fórmula inovadora combina cobertura e leveza, proporcionando
                    um resultado incrível e sem pesar no rosto.
                </p>
                <button className="comprar">Comprar</button>
            </div>
        </div>
    );
};

export default Componente01;
