/* js/main.js  */

document.addEventListener('DOMContentLoaded', () => {

    // --- CONTROLE DO MENU MOBILE RESPONSIVO ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            

            if (mainNav.classList.contains('active')) {
                menuToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }

    // --- SISTEMA DE TEMPLATES JS ---
    const projetosGrid = document.getElementById('projetos-grid');

    if (projetosGrid) {
        
        // Dados dos projetos
        const projetos = [
            {
                id: 1,
                titulo: 'Mutirão de Castração',
                descricao: 'Controlar a população de animais de rua é fundamental. Realizamos mutirões mensais em bairros carentes.',
                tags: ['Saúde', 'Prevenção']
            },
            {
                id: 2,
                titulo: 'Feira de Adoção',
                descricao: 'Conectamos nossos animais resgatados a famílias amorosas em eventos de adoção todo fim de semana.',
                tags: ['Adoção', 'Eventos']
            },
            {
                id: 3,
                titulo: 'Resgate e Cuidado Imediato',
                descricao: 'Nossa equipe atua 24/7 para resgatar animais em situação de risco, oferecendo cuidados veterinários imediatos.',
                tags: ['Resgate', 'Urgência']
            }
        ];

        // Função "Template" que gera o HTML do card 
        const criarCardProjeto = (projeto) => {
            // Criação dos elementos
            const card = document.createElement('div');
            card.className = 'card';

            const content = document.createElement('div');
            content.className = 'card-content';

            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tags-container';
            
            projeto.tags.forEach(tagTexto => {
                const tag = document.createElement('span');
                tag.className = 'badge badge-primary'; 
                tag.textContent = tagTexto;
                tagsContainer.appendChild(tag);
            });

            const h3 = document.createElement('h3');
            h3.textContent = projeto.titulo;

            const p = document.createElement('p');
            p.textContent = projeto.descricao;

            const footer = document.createElement('div');
            footer.className = 'card-footer';

            const a = document.createElement('a');
            a.href = `#projeto-${projeto.id}`; 
            a.className = 'btn btn-primary';
            a.textContent = 'Saiba Mais';

            content.appendChild(tagsContainer);
            content.appendChild(h3);
            content.appendChild(p);
            footer.appendChild(a);
            
            card.appendChild(content);
            card.appendChild(footer);

            return card;
        };

        // Renderiza todos os projetos na tela
        projetos.forEach(projeto => {
            const cardElement = criarCardProjeto(projeto);
            projetosGrid.appendChild(cardElement);
        });
    }

        // --- CONTROLE DO MODAL DE FEEDBACK ---
    const modalBackdrop = document.getElementById('feedback-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (modalBackdrop && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener('click', () => {
            modalBackdrop.classList.add('active');
        });

        closeModalBtn.addEventListener('click', () => {
            modalBackdrop.classList.remove('active');
        });

        // Fechar clicando fora do modal
        modalBackdrop.addEventListener('click', (event) => {
            if (event.target === modalBackdrop) {
                modalBackdrop.classList.remove('active');
            }
        });
    }

    // --- Validação de Formulário (extra, para toast/feedback) ---
    const formVoluntario = document.getElementById('form-voluntario');
    if (formVoluntario) {
        formVoluntario.addEventListener('submit', (event) => {
            event.preventDefault(); 
            alert('Cadastro enviado com sucesso! (Isto seria um Toast ou Modal de feedback)');
            
            // Limpa o formulário
            formVoluntario.reset();
        });
    }

});