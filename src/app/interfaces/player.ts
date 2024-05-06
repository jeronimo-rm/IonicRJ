export interface Player {
  atleta_id: number;
  nome_popular: string;
  nome: string;
  posicao: Posicao;
}

interface Posicao {
  nome: string;
  sigla: string;
}

export interface ChampionShip {
  campeonato_id: number;
  nome: string;
  slug: string;
  nome_popular: string;
  edicao_atual: Edicaoatual;
  fase_atual: Faseatual;
  rodada_atual: Rodadaatual;
  status: string;
  tipo: string;
  logo: string;
  regiao: string;
  fases: Fase[];
}

interface Fase {
  fase_id: number;
  edicao: Edicaoatual;
  nome: string;
  slug: string;
  status: string;
  decisivo: boolean;
  eliminatorio: boolean;
  ida_e_volta: boolean;
  tipo: string;
  grupos: any[];
  chaves: any[];
  rodadas: any[];
  proxima_fase: null;
  fase_anterior: null;
  _link: string;
}

interface Rodadaatual {
  nome: string;
  slug: string;
  rodada: number;
  status: string;
}

interface Faseatual {
  fase_id: number;
  nome: string;
  slug: string;
  tipo: string;
  _link: string;
}

interface Edicaoatual {
  edicao_id: number;
  temporada: string;
  nome: string;
  nome_popular: string;
  slug: string;
}
