import { apiConfig } from "./api-config";

export async function scheduleCancel(id) {  // Agora recebe o ID diretamente
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: 'DELETE',
        });
        alert("Agendamento cancelado com sucesso!");
    } catch (error) {
        console.error(error);
        alert('Não foi possível cancelar o agendamento, tente novamente mais tarde');
    }
}
