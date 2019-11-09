function faq() {
    document.getElementById('corpo').innerHTML = `
        <section>
        <div class="mt-5 text-light bg-preto p-3 text-center"><h1>FAQ</h1></div>
        <div class="container">
            <div class="accordion p-3" id="accordionExample">
                <div class="card">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0" style="font-size: 1rem; padding: 0.5rem;">
                                Collapsible Group Item #1
                            </h2>
                        </div>
                    </button>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0" style="font-size: 1rem; padding: 0.5rem;">
                                    Collapsible Group Item #2
                            </h2>
                        </div>
                    </button>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0" style="font-size: 1rem; padding: 0.5rem;">
                                Collapsible Group Item #3
                        </h2>
                    </div>
                </button>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                        data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
    document.documentElement.scrollTop = 0;
}