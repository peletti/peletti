const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{personagem: 0},
	{Sólido: 0},
	{chao: 0},
	{lava: 0},
	{moeda: 0},
	{Sprite2: 0},
	{pontuacao: 0},
	{bau: 0},
	{voceVenceu: 0},
	{moedas: 0}
];

self.InstanceType = {
	personagem: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	moeda: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	pontuacao: class extends self.ITextInstance {},
	bau: class extends self.ISpriteInstance {},
	voceVenceu: class extends self.ITextInstance {}
}