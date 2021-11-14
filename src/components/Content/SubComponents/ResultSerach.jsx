import Link from "next/link";

function ResultSearch() {
  return (
    <>
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
