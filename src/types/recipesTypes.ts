interface IngredienteBase {
  id: number;
  nomesIngrediente: string[];
  receita_id: number;
  created_at: string;
}

interface Receita {
  id: number;
  receita: string;
  ingredientes: string;
  modo_preparo: string;
  link_imagem: string;
  tipo: "agridoce" | "salgado" | "doce";
  created_at: string;
  IngredientesBase: IngredienteBase[];
}

export type { IngredienteBase, Receita };