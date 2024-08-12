import iconBaymax from "./assets/baymax.svg";
import iconBaymaxMao from "./assets/baymaxMao.svg";
import iconCoracao from "./assets/coracao.svg";
import iconParticipante from "./assets/iconeParticipante.svg";
import baymaxBackground from "./assets/baymaxBackground.svg";

export default function App() {
  return (
    <body className="bg-fundo relative md:left[2387px] md:top[-177px] w-[1440px] h-[1024px] overflow-hidden mx-auto">
     <main>
      <section >
      <div className="relative h-screen flex flex-col md:flex-row font-poppins text-base font-bold">
        <div className="w-full sm:w-1/2 md:w-auto md:absolute md:left-[20px] md:top-[8px] p-4"><img src={iconBaymax} alt="logo do site" /></div>
        <div className="w-full sm:w-1/2 md:w-auto md:absolute md:left-[497px] md:top-[44px] text-letraCinza hover:text-letra p-4">HOME</div>
        <div className="w-full sm:w-1/2 md:w-auto md:absolute md:left-[642px] md:top-[44px] text-letraCinza hover:text-letra p-4">EQUIPAMENTOS</div>
        <div className="w-full sm:w-1/2 md:w-auto md:absolute md:left-[880px] md:top-[47px] p-4 text-letra hover:text-letra">SOBRE</div>
        <div className="w-full sm:w-1/2 md:w-auto md:absolute md:left-[1027px] md:top-[44px] text-letraCinza hover:text-letra p-4">PARTICIPANTE</div>
        <div className="w-full sm:w-1/2 md:w-auto md:absolute md:left-[1249px] md:top-[35px] p-4"><img src={iconParticipante} alt="apagina de login" /></div>
       </div>
      </section>

      <section className="relative h-screen bg-caixa absolute left-[122px] top-[-500px] w-[1196px] h-[768px] rounded-[20px]">
        <div className="relative h-screen text-poppins font-semibold text-letra md:text-[48px] absolute md:left-[380px] md:top-[41px] md:w-[473px] md:h-[72px]">
          <h1><span className="text-vermelho">Funções</span> principais</h1>
        </div>

        
        <div className=" bg-caixaTopicos absolute left-[40px] top-[147px] w-[355px] h-[573px] rounded-[20px]">
          <div className="absolute left-[-35px] top-[-150px] w-[231px] h-[235px]"><img src={iconBaymaxMao} alt="o baymax dando um oizinho" /></div>
          <h1 className="text-montserrat font-light text-vermelho text-[36px] absolute left-[33px] top-[115px] w-[307px] h-[45px] ">Monitoramento Cardíaco</h1>
          <p className="text-poppins font-regular text-letra text-[20px] absolute left-[37px] top-[250px] w-[281px] h-[261px]">O Baymax vai ter um dispositivo em suas mão que quando conectado no smartphone do usuário, torna possível monitorar seus batimentos cardíacos. </p>
        </div>

        <div className="bg-caixaTopicos absolute left-[433px] top-[147px] w-[335px] h-[329px] rounded-[20px]">
          <h1 className="text-montserrat font-light text-vermelho text-[32px] absolute left-[24px] top-[10px] w-[307px] h-[132px]">Medir a Temperatura</h1>
          <p className="text-poppins font-regular text-letra text-[20px] absolute left-[28px] top-[70px] w-[281px] h-[261px]">Em uma das mãos do Baymax haverá uma espécie de termometro que ira informar o usuário a sua temperatura assim que estiver conectado no smartphone.</p>
        </div>

        <div className="bg-caixaTopicos absolute left-[806px] top-[147px] w-[350px] h-[329px] rounded-[20px]">
          <h1 className="text-montserrat font-light text-vermelho text-[32px] absolute left-[24px] top-[10px] w-[316px] h-[66px]">Horário de Remédios</h1>
          <p className="text-poppins font-regular text-letra text-[20px] absolute left-[28px] top-[70px] w-[281px] h-[261px]">O usuário quando estiver conectado com o aplicativo do Baymax poderá personalizar os horarios que preferir. O robô irá sinalizar junto com o aplicativo a hora de tomar o remédio.</p>
        </div>

        <div className=" bg-caixaTopicos absolute left-[430px] top-[510px] w-[736px] h-[210px] rounded-[20px]">
          <h1 className="text-montserrat font-light text-vermelho text-[32px] absolute left-[24px] top-[10px] w-[451px] h-[90px]">Suporte Emocional</h1>
          <p className="text-poppins font-regular text-letra text-[20px] absolute left-[28px] top-[70px] w-[500px] h-[90px]">O Baymax é uma pelucia, voltado para o público infantil. Ele tem esse formato justamente para a criança gostar de ter o cuidado médico, e não achar chato ou traumático os momentos de cuidado em casa.</p>
          <div className="absolute left-[543px] top-[21px] w-[193px] h-[150px]"><img src={iconCoracao} alt="coraçaozinho" /></div>
        </div>
      </section>
     </main>
    </body>
  )

}