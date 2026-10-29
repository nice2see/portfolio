export const models={normal_only_pca:'기존 PCA',means_only_pca:'평균 특징 PCA',noise_means_pca:'노이즈 반영 PCA',physics_margin_original:'물리 학습 SVM'};
export const families={nominal:'정상 상태',temperature:'전자 에너지 교란',density:'전체 밀도 교란',localized_density:'국소 밀도 교란'};
export const variants={maxwell_fixed:'기준 Maxwell 모델',generalized_eedf_1p2:'EEDF 형태 변화',relative_escape_response:'상대 자기흡수 응답'};
export function condition(noise){const [structure,rho]=noise.split(':');return {structure,rho:Number(rho)};}
export function selectCase(data,state){const n=condition(state.noise);return data.cases.find(c=>c.seed===Number(state.seed)&&c.repeat===Number(state.repeat)&&c.variant===state.variant&&c.family===state.family&&c.regime===(state.family==='nominal'?'nominal':state.regime)&&c.sigma===Number(state.sigma)&&c.structure===n.structure&&c.rho===n.rho);}
export function aggregate(data,c,model){const same=r=>r.variant===c.variant&&r.sigma===c.sigma&&r.structure===c.structure&&r.rho===c.rho&&r.model===model;const overall=data.summary.find(same);const drift=c.family==='nominal'?null:data.families.find(r=>same(r)&&r.family===c.family&&r.regime===c.regime);if(!overall||c.family!=='nominal'&&!drift)throw Error('Missing matching metrics');return {overall,drift};}
export function status(c,model){const a=c.predictions[model].alarm;return {alarm:a,text:a?'경보':'경보 없음',correct:c.family==='nominal'?!a:a};}
export function percent(n,digits=2){if(!Number.isFinite(n))return '—';return (n*100).toFixed(digits)+'%';}
export function range(mean,min,max){return percent(mean)+' ('+percent(min)+'–'+percent(max)+')';}
