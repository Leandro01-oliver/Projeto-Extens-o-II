import Link from "next/link";

function ResultSearch() {
  return (
    <>
      <section className="box-result">
        <div className="row align-items-center">
          <div className="col-sm-6 my-3">
            <div className="box-text-result">
              <div className="text-result">
                <i class="fas fa-check mx-3 "></i>
                <span className="true-ckeck">Verdadeiro</span>
              </div>
              <div className="text-result">
                {" "}
                <i class="fas fa-times mx-3 "></i>
                <span className="false-ckeck">Falso</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 my-3">
            <div className="box-porcentagem-result">
              <div className="circlo-porcem">
                <span className="text-porcentagem">30%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box-site-result mt-3 text-center ">
          <Link href="#">
            <li>www.noriciasfalsas.com.br</li>
          </Link>
          <Link href="#">
            <li>www.noriciasfalsas.com.br</li>
          </Link>
          <Link href="#">
            <li>www.noriciasfalsas.com.br</li>
          </Link>
          <Link href="#">
            <li>www.noriciasfalsas.com.br</li>
          </Link>
        </div>
      </section>
    </>
  );
}
export default ResultSearch;
