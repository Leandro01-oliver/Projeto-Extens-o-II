import Link from "next/link";

function Search() {

    let textlink = ["Fake News 1",
                    "Fake News 2",
                    "Não foi possível encontrar a sua pesquisa, tente novamente :)"
                   ];

  function openResultSearch() {
    let Search = document.querySelector(".search");
    let BoxPesquiseSearch = document.querySelector(".box-pesquise-search");
    let notice = document.querySelectorAll(".box-result-search");
    let boxResult = document.querySelector(".box-result");



    if (Search.value == textlink[0]) {
      BoxPesquiseSearch.style.display = "block";
      notice[0].style.display = "block";
      notice[1].style.display = "none";
      notice[2].style.display = "none";
    }
    else if (Search.value == textlink[1]) {
      BoxPesquiseSearch.style.display = "block";
      notice[0].style.display = "none";
      notice[1].style.display = "block";
      notice[2].style.display = "none";
    }else  if (Search.value == ""){
        BoxPesquiseSearch.style.display = "none";
        notice[0].style.display = "none";
        notice[1].style.display = "none";
        notice[2].style.display = "none";
        boxResult.style.display = "none";
      }
    else if (Search.value != textlink[0] || Search.value != textlink[1]) {
      BoxPesquiseSearch.style.display = "block";
      notice[0].style.display = "none";
      notice[1].style.display = "none";
      notice[2].style.display = "block";
    }
  }

  function showResultSearch(){
   let boxResult = document.querySelector(".box-result");

   boxResult.classList.toggle("active-porcen");
  }
  return (
    <>
      <section className="box-search">
        <div className="box-icon">
          <i class="fas fa-search icon-search"></i>
        </div>
        <input
          type="text"
          className="search"
          placeholder="Digite a sua busca da notícia"
          onKeyDown={openResultSearch}
        />
        <button className="btn-sub" type="submit">
          {" "}
          Search
        </button>
      </section>
      <div className="box-pesquise-search">
        <Link href="#">
          <div className="box-result-search" onClick={showResultSearch}>
            <i class="far fa-clock mx-2"></i>
            <span className="text-result-search">{textlink[0]}</span>
          </div>
        </Link>
        <Link href="#">
          <div className="box-result-search" onClick={showResultSearch}>
            <i class="far fa-clock mx-2"></i>
            <span className="text-result-search">{textlink[1]}</span>
          </div>
        </Link>
        <div className="box-result-search " >
          <i class="far fa-clock mx-2"></i>
          <span className="text-result-search">
          {textlink[2]}
          </span>
        </div>
      </div>

      <section className="box-result">
        <div className="row align-items-center">
          <div className="col-sm-12 my-3">
            <div className="box-porcentagem-result">
              <div className="circlo-porcem">
                <span className="text-porcentagem">30%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Search;
