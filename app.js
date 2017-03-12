/**
 * http://editor.method.ac/ - good site for creating or changing svg online
 */

class Cat {
    constructor(head, mustache, body, tail) {
        this.head = head;
        this.mustache = mustache;
        this.body = body;
        this.tail = tail;
    }

    getElement() {
        let shape =`
        <svg width="200" height="250">
             <g id="left-ear">
                <line stroke-linecap="null" stroke-linejoin="null" id="svg_9" y2="48" x2="72" y1="16" x1="73"
                      fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/>
                <line stroke-linecap="null" stroke-linejoin="null" id="svg_7" y2="15" x2="73" y1="38" x1="85"
                      fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/>
            </g>
            <g id="right-ear">
                <line stroke-linecap="null" stroke-linejoin="null" id="svg_6" y2="12" x2="118.5" y1="38" x1="106.5"
                      fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/>
                <line stroke-linecap="null" stroke-linejoin="null" id="svg_8" y2="47" x2="120.5" y1="12" x1="119.5"
                      fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/>
            </g>
            ${this.head}
            ${this.mustache}
            ${this.body}
            ${this.tail}
        </svg>
        `;
        return shape;
    }
}

const heads = {
    circle: '<ellipse id="head" stroke="#000" ry="30" rx="30" cy="67" cx="97" stroke-width="1.5" fill="#fff"/>',
    rect: '<rect id="head" height="55" width="55" y="41" x="68.5" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="#fff"/>',
    triangle: '<path id="head" stroke="#000" fill="#fff" stroke-width="1.5" d="m60.1239,98.7535l37.15346,-58.04335l37.15346,58.04335l-74.30691,0l-0.00001,0z" transform="rotate(180 97.27735900878906,69.73182678222656) "/>'
};

const mustaches = {

};

const bodies = {
    rect: '<rect stroke="#000" id="body" height="114.98507" width="107" y="98" x="44.5" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>'
};

const tails = {
    left: '<path stroke="#000" id="tail" d="m99.5,202c-16.14857,55 -41.22796,-35 -70.44082,19" opacity="0.5" stroke-opacity="null" stroke-width="2" fill="none"/>'
};


let targetCat = new Cat();
let $target = $('#target');
let $options = $('#options');

$(document).ready(()=>{
    console.log('hello');
    let cat1 = new Cat(heads.circle, null, bodies.rect, tails.left);
    let cat2 = new Cat(heads.rect, null, bodies.rect, tails.left);
    let cat3 = new Cat(heads.triangle, null, bodies.rect, tails.left);
    let $body = $('body');
    $body.append(cat1.getElement());
    $body.append(cat2.getElement());
    $body.append(cat3.getElement());

    fillOptions();
});

function fillOptions() {
    for (let head in heads) {
        if (heads.hasOwnProperty(head)) {
            let $element = $(`<svg width="200" height="250">${heads[head]}</svg>`);
            $element.click((e)=>{
                targetCat.head = heads[head];
                $target.html(targetCat.getElement());
            });
            $options.append($element);
        }
    }
}

// function writeOption()
