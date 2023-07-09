/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css';
import ProductCard from "../ProductCard/ProductCard";

const Main = () => {
    

    return(

        <div className="row">
         <div className="col-lg-4 col-md-12 mt-3 "> 
          <ProductCard name={'Mochila Aventureira Pro'} description={'A Mochila Aventureira Pro é o companheiro perfeito para suas aventuras ao ar livre. Com design durável e funcional, ela oferece amplo espaço de armazenamento e recursos inteligentes para atender às necessidades dos entusiastas de atividades ao ar livre.'} features={['Com a capacidade expansível da Mochila Aventureira Pro, você terá espaço de sobra para guardar todos os seus equipamentos essenciais. Seja para uma caminhada de um dia ou uma expedição mais longa, esta mochila se adapta às suas necessidades.', 'Não importa as condições climáticas, a Mochila Aventureira Pro foi projetada para enfrentar todos os desafios. Seu material resistente à água e durável protege seus pertences de chuva, neve e umidade, mantendo-os secos e seguros.', 'Com alças ajustáveis e acolchoadas, a Mochila Aventureira Pro oferece conforto excepcional durante longas caminhadas ou trilhas. Além disso, o sistema de ventilação nas costas proporciona circulação de ar adequada, mantendo você fresco e confortável mesmo em atividades intensas.']} price={899} imageUrl={'https://i.imgur.com/WSvGRAW.png'} id={1}></ProductCard>
          </div>

          <div className="col-lg-4 col-md-12 mt-3">
          <ProductCard name={'Lanterna Tática UltraBrilho'} description={'A Lanterna Tática UltraBrilho é a solução perfeita para iluminar o seu caminho em todas as suas aventuras outdoor. Com seu design robusto e potência excepcional, esta lanterna garante uma iluminação confiável em qualquer situação.'} features={['Com a capacidade expansível da Mochila Aventureira Pro, você terá espaço de sobra para guardar todos os seus equipamentos essenciais. Seja para uma caminhada de um dia ou uma expedição mais longa, esta mochila se adapta às suas necessidades.', 'Não importa as condições climáticas, a Mochila Aventureira Pro foi projetada para enfrentar todos os desafios. Seu material resistente à água e durável protege seus pertences de chuva, neve e umidade, mantendo-os secos e seguros.', 'Com alças ajustáveis e acolchoadas, a Mochila Aventureira Pro oferece conforto excepcional durante longas caminhadas ou trilhas. Além disso, o sistema de ventilação nas costas proporciona circulação de ar adequada, mantendo você fresco e confortável mesmo em atividades intensas.']} price={899} imageUrl={'./flashlight.jpg'} id={2}></ProductCard>
          </div>

          <div className="col-lg-4 col-md-12 mt-3">
          <ProductCard name={'Barraca Aventure Plus'} description={'A Barraca Aventure Plus é a sua casa longe de casa durante suas expedições outdoor. Com seu design espaçoso, durabilidade excepcional e facilidade de montagem, esta barraca é a escolha ideal para uma noite confortável e protegida em meio à natureza.'} features={['Com a capacidade expansível da Mochila Aventureira Pro, você terá espaço de sobra para guardar todos os seus equipamentos essenciais. Seja para uma caminhada de um dia ou uma expedição mais longa, esta mochila se adapta às suas necessidades.', 'Não importa as condições climáticas, a Mochila Aventureira Pro foi projetada para enfrentar todos os desafios. Seu material resistente à água e durável protege seus pertences de chuva, neve e umidade, mantendo-os secos e seguros.', 'Com alças ajustáveis e acolchoadas, a Mochila Aventureira Pro oferece conforto excepcional durante longas caminhadas ou trilhas. Além disso, o sistema de ventilação nas costas proporciona circulação de ar adequada, mantendo você fresco e confortável mesmo em atividades intensas.']} price={899} imageUrl={'tent.avif'} id={3}></ProductCard>
          </div>

          {/* <div className="col-lg-4 col-md-12 mt-3">
          <ProductCard name={'Mochila Aventureira Pro'} description={'A Mochila Aventureira Pro é o companheiro perfeito para suas aventuras ao ar livre. Com design durável e funcional, ela oferece amplo espaço de armazenamento e recursos inteligentes para atender às necessidades dos entusiastas de atividades ao ar livre.'} features={['Com a capacidade expansível da Mochila Aventureira Pro, você terá espaço de sobra para guardar todos os seus equipamentos essenciais. Seja para uma caminhada de um dia ou uma expedição mais longa, esta mochila se adapta às suas necessidades.', 'Não importa as condições climáticas, a Mochila Aventureira Pro foi projetada para enfrentar todos os desafios. Seu material resistente à água e durável protege seus pertences de chuva, neve e umidade, mantendo-os secos e seguros.', 'Com alças ajustáveis e acolchoadas, a Mochila Aventureira Pro oferece conforto excepcional durante longas caminhadas ou trilhas. Além disso, o sistema de ventilação nas costas proporciona circulação de ar adequada, mantendo você fresco e confortável mesmo em atividades intensas.']} price={899} imageUrl={'https://i.imgur.com/WSvGRAW.png'} id={1}></ProductCard>
          </div> */}
          

</div>
    )
}

export default Main;