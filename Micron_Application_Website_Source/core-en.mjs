export const models={normal_only_pca:'Original PCA',means_only_pca:'Mean-feature PCA',noise_means_pca:'Noise-aware mean PCA',physics_margin_original:'Physics-trained SVM'};
export const families={nominal:'Normal',temperature:'Electron-energy change',density:'Global density change',localized_density:'Local density change'};
export const variants={maxwell_fixed:'Baseline Maxwell response',generalized_eedf_1p2:'EEDF shape variant',relative_escape_response:'Relative self-absorption response'};
export function condition(noise){const [structure,rho]=noise.split(':');return {structure,rho:Number(rho)};}
export function selectCase(data,state){const n=condition(state.noise);return data.cases.find(c=>c.seed===Number(state.seed)&&c.repeat===Number(state.repeat)&&c.variant===state.variant&&c.family===state.family&&c.regime===(state.family==='nominal'?'nominal':state.regime)&&c.sigma===Number(state.sigma)&&c.structure===n.structure&&c.rho===n.rho);}
export function aggregate(data,c,model){const same=r=>r.variant===c.variant&&r.sigma===c.sigma&&r.structure===c.structure&&r.rho===c.rho&&r.model===model;const overall=data.summary.find(same);const drift=c.family==='nominal'?null:data.families.find(r=>same(r)&&r.family===c.family&&r.regime===c.regime);if(!overall||c.family!=='nominal'&&!drift)throw Error('Missing matching metrics');return {overall,drift};}
export function status(c,model){const a=c.predictions[model].alarm;return {alarm:a,text:a?'Alarm':'No alarm',correct:c.family==='nominal'?!a:a};}
export function percent(n,digits=2){if(!Number.isFinite(n))return '—';return (n*100).toFixed(digits)+'%';}
export function range(mean,min,max){return percent(mean)+' ('+percent(min)+'–'+percent(max)+')';}
