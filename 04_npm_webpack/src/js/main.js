// Load PIXI
import * as PIXI from 'pixi.js';
import {DotFilter} from '@pixi/filter-dot';

// Load resources
import '../img/cat.png';

// Use PIXI
const canvas = document.getElementById('mycanvas');

const app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight
});

const catTexture = PIXI.Texture.from('img/cat.png');
const catSprite = new PIXI.Sprite(catTexture);
app.stage.addChild(catSprite);

const catDotFilterSprite = new PIXI.Sprite(catTexture);
catDotFilterSprite.x = app.renderer.width / 2;
catDotFilterSprite.y = app.renderer.height / 2;
catDotFilterSprite.anchor.set(0.5);
catDotFilterSprite.filters = [new DotFilter()]
app.stage.addChild(catDotFilterSprite);