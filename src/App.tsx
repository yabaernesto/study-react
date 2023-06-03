import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { ListItem } from './components/ListItem'

const gameListData = [
  {
    url: "#",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAJzMJZ1RzGTU_mhO4WA7cUj8phPXWf3ROQ&usqp=CAU",
    alt: "Foto do Naruto",
  },
  {
    url: "#",
    imageUrl: "https://m.media-amazon.com/images/I/71xlgzy8YNL.jpg",
    alt: "Foto de One Piece"
  },
  {
    url: "#",
    imageUrl: "https://media.fstatic.com/hMVj6_2kIu8eQaqOv75n3QuRul4=/322x478/smart/filters:format(webp)/media/movies/covers/2011/03/0d6b90e151a6d55b450d81df1ff6ee55.jpg", 
    alt: "Foto de Full Metal Alchimist"          
  },
]

const channelListData = [
  {
    url: "#",
    imageUrl: "https://yt3.googleusercontent.com/wRRrQj2qkuc1y6inADbWk0cinKT2OYCbbc1eaYi3LAv0I5N6wM9HQOpi9B-D8ZFZ-ScRCnmYwQ=s900-c-k-c0x00ffffff-no-rj",
    alt: "Diana Zambrozuski",
  },
  {
    url: "#",
    imageUrl: "https://conteudo.imguol.com.br/c/entretenimento/be/2021/10/18/piuzinho-influenciador-de-free-fire-1634587943216_v2_1x1.jpg",
    alt: "Foto de Piuzinho",
  },
]

const socialListData = [
]

export function App() {
  return (
    <div>
      { /* incluir header aqui */ }
      <Header />

      <main>
      { /* incluir section aqui */ }
        <Section 
          title="Meus animes"
          subtitle="Os animes que eu mais curto assistir!"
          className="games-list"
        >
          {/* items da lista */}

          {
            gameListData.map((item) => {
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }

        </Section>

        <Section
          title="Meus streamers"
          subtitle="Os streamers e lives que mais curto"
          className="channel-list"
        >
          {
            channelListData.map((item) => {
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo"
          className="social-list"
        >

        </Section>
      </main>
    </div>
  )
}