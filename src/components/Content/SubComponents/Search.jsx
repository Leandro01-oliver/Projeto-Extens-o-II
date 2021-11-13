  import Link from "next/link";

  function Search(){
 return (
     <>
     <section className="box-search">
         <div className="box-icon">
     <i class="fas fa-search icon-search"></i>
     </div>
         <input type="text" className="search" placeholder="Digite a sua busca da notícia"/>
         <button className="btn-sub" type="submit"> Search</button>
     </section>
     <div className="box-pesquise-search">
        <Link href="#">
                <div className="box-result-search">
                <i class="far fa-clock mx-2"></i>
                    <span className="text-result-search">
                        Fake News
                    </span>
                </div>
        </Link>
        <Link href="#">
                <div className="box-result-search mt-3">
                <i class="far fa-clock mx-2"></i>
                    <span className="text-result-search">
                        Fake News
                    </span>
                </div>
        </Link>
     </div>
     </>
 )
  }
  export default Search;