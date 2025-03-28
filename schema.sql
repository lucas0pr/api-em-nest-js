CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  nome_do_produto VARCHAR(255) NOT NULL,
  fornecedor VARCHAR(255) NOT NULL,
  endereco_fornecedor VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL,
  descricao TEXT,
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
