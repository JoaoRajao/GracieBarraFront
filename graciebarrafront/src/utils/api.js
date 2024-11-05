// Host base para a API
export const apihost = 'https://8080--main--tis4-gracie-barra--alex.coder.al3xdev.net';

/**
 * Lista todos os planos cadastrados.
 */
export const listarPlanos = async () => {
    try {
      const response = await fetch(`${apihost}/api/plan/list`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        console.error('Erro na resposta da API:', response);
        throw new Error(`Erro na resposta da API: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Resposta da API para listarPlanos:', data);
      
      return data.object; // Retorna apenas o array de planos dentro de "object"
    } catch (error) {
      console.error('Erro ao listar planos:', error);
      throw error;
    }
  };

/**
 * Cadastra um novo plano.
 * @param {Object} dadosPlano - Dados do plano a ser cadastrado
 */
export const cadastrarPlano = async (dadosPlano) => {
  try {
    const response = await fetch(`${apihost}/api/plan/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: dadosPlano.categoria,
        name: dadosPlano.nome,
        plan_type: Number(dadosPlano.tipo),
        price: parseFloat(dadosPlano.preco),
        registration_fee: parseFloat(dadosPlano.taxaMatricula),
      }),
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response);
      throw new Error(`Erro ao cadastrar plano: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Erro ao cadastrar plano:', error);
    throw error;
  }
};

/**
 * Atualiza um plano existente.
 * @param {string} id - ID do plano a ser atualizado
 * @param {Object} dadosPlano - Novos dados do plano
 */
export const atualizarPlano = async (id, dadosPlano) => {
  try {
    const response = await fetch(`${apihost}/api/plan/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: dadosPlano.categoria,
        name: dadosPlano.nome,
        plan_type: Number(dadosPlano.tipo),
        price: parseFloat(dadosPlano.preco),
        registration_fee: parseFloat(dadosPlano.taxaMatricula),
      }),
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response);
      throw new Error(`Erro ao atualizar plano: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Erro ao atualizar plano:', error);
    throw error;
  }
};

/**
 * Exclui um plano.
 * @param {string} id - ID do plano a ser excluído
 */
export const excluirPlano = async (id) => {
  try {
    const response = await fetch(`${apihost}/api/plan/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response);
      throw new Error(`Erro ao excluir plano: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Erro ao excluir plano:', error);
    throw error;
  }
};

/**
 * Lista todos os usuários cadastrados.
 */
export const listarUsuarios = async () => {
  try {
    const response = await fetch(`${apihost}/api/user/list`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response);
      throw new Error(`Erro na resposta da API: ${response.status}`);
    }

    const data = await response.json();
    console.log('Resposta da API para listarUsuarios:', data); // Verifique a estrutura da resposta
    return data.object; // Retorna apenas o array de usuários, assumindo que a chave é "object"
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    throw error;
  }
};

/**
 * Cadastra um novo usuário.
 * @param {Object} dadosUsuario - Dados do usuário a ser cadastrado
 */
export const cadastrarUsuario = async (dadosUsuario) => {
  try {
    const response = await fetch(`${apihost}/api/user/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosUsuario),
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response);
      throw new Error(`Erro ao cadastrar usuário: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};

/**
 * Atualiza um usuário existente.
 * @param {string} id - ID do usuário a ser atualizado
 * @param {Object} dadosUsuario - Novos dados do usuário
 */
export const atualizarUsuario = async (id, dadosUsuario) => {
  try {
    const response = await fetch(`${apihost}/api/user/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosUsuario),
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response);
      throw new Error(`Erro ao atualizar usuário: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
};

/**
 * Exclui um usuário.
 * @param {string} id - ID do usuário a ser excluído
 */
export const excluirUsuario = async (id) => {
  try {
    const response = await fetch(`${apihost}/api/user/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response);
      throw new Error(`Erro ao excluir usuário: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    throw error;
  }
};

// Função para listar treinos
export const listarTreinos = async () => {
  try {
    const response = await fetch(`${apihost}/api/workout/list`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Erro ao listar treinos.');
    const data = await response.json();
    return data.object;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Função para criar um novo treino
export const criarTreino = async (treinoData) => {
  try {
    const response = await fetch(`${apihost}/api/workout/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(treinoData),
    });
    if (!response.ok) throw new Error('Erro ao criar treino.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Função para atualizar um treino
export const atualizarTreino = async (id, treinoData) => {
  try {
    const response = await fetch(`${apihost}/api/workout/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(treinoData),
    });
    if (!response.ok) throw new Error('Erro ao atualizar treino.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Função para excluir um treino
export const excluirTreino = async (id) => {
  try {
    const response = await fetch(`${apihost}/api/workout/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Erro ao excluir treino.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Função para listar avaliações
export const listarAvaliacoes = async () => {
  try {
    const response = await fetch(`${apihost}/api/rating/list`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Erro ao listar avaliações.');
    const data = await response.json();
    return data.object;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Função para criar uma nova avaliação
export const criarAvaliacao = async (avaliacaoData) => {
  try {
    const response = await fetch(`${apihost}/api/rating/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(avaliacaoData),
    });
    if (!response.ok) throw new Error('Erro ao criar avaliação.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Função para atualizar uma avaliação
export const atualizarAvaliacao = async (id, avaliacaoData) => {
  try {
    const response = await fetch(`${apihost}/api/rating/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(avaliacaoData),
    });
    if (!response.ok) throw new Error('Erro ao atualizar avaliação.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Função para excluir uma avaliação
export const excluirAvaliacao = async (id) => {
  try {
    const response = await fetch(`${apihost}/api/rating/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Erro ao excluir avaliação.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};