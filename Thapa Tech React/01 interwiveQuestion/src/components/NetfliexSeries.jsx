const NetfliexSeries = () => {
    let age = 21
    const Name = " game of thrones";
    const Sumamry = " 'Game of Thrones' achieved immense popularity due to a combination of factors, including its complex characters, intricate storylines, and stunning production value. The show's ability to create a richly detailed and immersive fantasy world, combined with its unpredictable narrative and high-stakes power struggles, captivated audiences worldwide."
    return (
      <>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYZntZHLDI1Pp2WwMoaHlEg1LI0gqmOuPdw&s" alt="game of thrones" />
        </div>
        <h2>Name : {Name}</h2>
        <p>Sumamry: {Sumamry}  </p>
        <button>{age >= 18 ? "watch" : "not Watch"}</button>
      </>
    )
  }

  export default NetfliexSeries;