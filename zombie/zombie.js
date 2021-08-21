
class Zombie extends HTMLElement {
    connectedCallback() {
    
        let html = `
<style>
    img {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin: 0 1em 0 0;
    }

    h2 {
        font-size: 3em;
        margin: 0 0 0.25em 0;
        line-height: 0.8;
    }

    h3 {
        margin: 0.5em 0 0 0;
        font-weight: normal;
    }

    .age, .infection-date {
        display: block;
    }

    span {
        line-height: 1.4;
    }

    .label {
        color: #555;
    }

    li, ul {
        display: inline;
        padding: 0;
    }

    li::after {
        content: ', ';
    }

    li:last-child::after {
        content: '';
    }

    li:last-child::before {
        content: ' and ';
    }
</style>
<div class="profilepic">
    <slot name="profile-image"><img src="https://assets.codepen.io/1804713/default.png" alt=""></slot>
</div>
<div class="info">
    <h2>
        <slot name="zombie-name" part="zname">Zombie Bob</slot>
    </h2>
    <span class="age">
        <span class="label">Age:</span> 
        <slot name="z-age">37</slot>
    </span>
    <span class="infection-date">
        <span class="label">Infection Date:</span> 
        <slot name="idate">September 12, 2025</slot>
    </span>
    <div class="interests">
        <span class="label">Interests: </span>
        <slot name="z-interests">
            <ul>
                <li>Long Walks on Beach</li>
                <li>brains</li>
                <li>defeating humanity</li>
            </ul>
        </slot>
    </div>
    <span class="z-statement">
        <span class="label">Apocalyptic Statement: </span> 
        <slot name="statement">Moooooooan!</slot>
    </span>
</div>
        `;

        
         this.attachShadow({mode: 'open'}).innerHTML = html;
    }
}

customElements.define('zombie-profile', Zombie);