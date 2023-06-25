/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css';

const Main = () => {
    const cards = [
        {
            title: 'Mochila Aventureira Pro',
            description: 'A Mochila Aventureira Pro é o companheiro perfeito para suas aventuras ao ar livre. Com design durável e funcional, ela oferece amplo espaço de armazenamento e recursos inteligentes para atender às necessidades dos entusiastas de atividades ao ar livre.',
            feature1: 'Com a capacidade expansível da Mochila Aventureira Pro, você terá espaço de sobra para guardar todos os seus equipamentos essenciais. Seja para uma caminhada de um dia ou uma expedição mais longa, esta mochila se adapta às suas necessidades.',
            feature2: 'Não importa as condições climáticas, a Mochila Aventureira Pro foi projetada para enfrentar todos os desafios. Seu material resistente à água e durável protege seus pertences de chuva, neve e umidade, mantendo-os secos e seguros.',
            feature3: 'Com alças ajustáveis e acolchoadas, a Mochila Aventureira Pro oferece conforto excepcional durante longas caminhadas ou trilhas. Além disso, o sistema de ventilação nas costas proporciona circulação de ar adequada, mantendo você fresco e confortável mesmo em atividades intensas.',
        },
        {
            title: 'Lanterna Tática UltraBrilho',
            description: 'A Lanterna Tática UltraBrilho é a solução perfeita para iluminar o seu caminho em todas as suas aventuras outdoor. Com seu design robusto e potência excepcional, esta lanterna garante uma iluminação confiável em qualquer situação.',
            feature1: 'A Lanterna Tática UltraBrilho oferece um feixe de luz ajustável para atender às suas necessidades. Você pode escolher entre um foco concentrado para iluminar objetos distantes ou um feixe amplo para iluminar uma área maior à sua frente. Adaptável e versátil, esta lanterna é perfeita para qualquer atividade ao ar livre.',
            feature2: 'Construída para durar, a Lanterna Tática UltraBrilho é resistente a impactos e projetada para suportar as condições mais adversas. Seu corpo robusto e à prova de água garantem que você possa contar com ela, mesmo nas situações mais extremas.',
            feature3: 'Com diferentes modos de iluminação, você pode ajustar a intensidade de luz da lanterna de acordo com a necessidade. Desde um modo de economia de energia para maior duração da bateria até um modo de alto brilho para iluminar seu ambiente com intensidade máxima, a Lanterna Tática UltraBrilho oferece versatilidade para todas as suas aventuras.',
        },
        {
            title: 'Barraca Aventure Plus',
            description: 'A Barraca Aventure Plus é a sua casa longe de casa durante suas expedições outdoor. Com seu design espaçoso, durabilidade excepcional e facilidade de montagem, esta barraca é a escolha ideal para uma noite confortável e protegida em meio à natureza.',
            feature1: 'A Barraca Aventure Plus oferece espaço suficiente para acomodar você e seu equipamento com conforto. Com compartimentos internos para organizar seus pertences e espaço para até quatro pessoas, esta barraca garante uma experiência agradável para todos os ocupantes.',
            feature2: 'Construída com materiais de alta qualidade, a Barraca Aventure Plus é resistente à água e projetada para suportar condições climáticas adversas. Seja chuva, vento ou sol intenso, você estará protegido dentro da barraca, desfrutando de um ambiente seco e seguro.',
            feature3: 'Com um sistema de montagem simplificado, a Barraca Aventure Plus pode ser montada em questão de minutos. As varetas de alta resistência e as conexões intuitivas facilitam o processo, permitindo que você aproveite mais tempo para suas aventuras.',
        },
        {
            title: 'Cantil Térmico ProGo',
            description: 'O Cantil Térmico ProGo é o companheiro ideal para manter suas bebidas quentes ou frias durante suas atividades outdoor. Com seu design elegante e funcionalidade avançada, este cantil garante que você se mantenha hidratado(a) e desfrute de sua bebida preferida a qualquer momento.',
            feature1: 'Graças ao seu isolamento térmico avançado, o Cantil Térmico ProGo mantém a temperatura de suas bebidas por um longo período. Seja para desfrutar de um café quente durante uma caminhada matinal ou saborear uma bebida refrescante em um dia quente de verão, este cantil garante que sua bebida permaneça na temperatura ideal.',
            feature2: 'Feito com materiais de qualidade premium, o Cantil Térmico ProGo é resistente a impactos e vazamentos. Sua construção robusta garante que você possa levá-lo em suas aventuras sem se preocupar com danos ou vazamentos indesejados.',
            feature3: 'Com um design elegante e ergonômico, o Cantil Térmico ProGo é fácil de transportar. Seu tamanho compacto cabe facilmente na mochila ou na bolsa lateral, permitindo que você o leve para onde quer que vá. Além disso, a tampa de rosca segura garante que você possa abrir e fechar o cantil com facilidade, mantendo sua bebida segura e evitando derramamentos acidentais.',
        },
    ];

    const renderMainItem = (mainItem, index) => {
        return(
            <div key={index}>
            <h3>{mainItem.title}</h3>
            <h4>{mainItem.description}</h4>
            <h4>{mainItem.feature1}</h4>
            <h4>{mainItem.feature2}</h4>
            <h4>{mainItem.feature3}</h4>
            </div>
        )
    }

    return(
        // <div classNameName="container-fluid">
        //     <div classNameName="row">
        //         <div classNameName="col-lg-4 cards">
        //             {cards.map((item, index) => renderMainItem(item,index))}
        //         </div>
        //     </div>
        // </div>

        <div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    )
}

export default Main;