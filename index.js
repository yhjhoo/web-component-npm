import {helloWorld} from './hello-world.js';

helloWorld();


import confetti from 'canvas-confetti';
confetti.create(document.getElementById('canvas'), {
resize: true,
useWorker: true,
})({ particleCount: 200, spread: 200 });


import "@yhjhoo/coffee/product";
import "/zombie/zombie.js";
class IndexPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let html = `
        <div class="content">
            <kr-product icon="/static/coffee.png" title="Kopi" price="1.10"></kr-product>
            <kr-product icon="/static/coffee_gold.png" title="Kopi Gold" price="5.10"></kr-product>
        </div>

        <zombie-profile>
            <img slot="profile-image" src="https://assets.codepen.io/1804713/moana.png" />
            <span slot="zombie-name" part="zname">Mooana</span>
            <span slot="z-age">25</span>
            <span slot="idate">October 15, 2027</span>
            <ul slot="z-interests">
                <li>rotary phones</li>
                <li>human sports</li>
                <li>brains</li>
            </ul>
            <span slot="statement">Fun and fancy free lady looking for a zombie with all its limbs.</span>
        </zombie-profile>

        <zombie-profile>
            <img slot="profile-image" src="https://assets.codepen.io/1804713/leroy.png" />
            <span slot="zombie-name">Leroy</span>
            <span slot="z-age">29</span>
            <span slot="idate">March 1, 2026</span>
            <ul slot="z-interests">
                <li>disco</li>
                <li>leisure suits</li>
                <li>brains</li>
            </ul>
            <span slot="statement">Disco daddy who won't stop dancing your heart away.</span>
        </zombie-profile>
        `;

        this.innerHTML = html;
    }
}

customElements.define('index-page', IndexPage);