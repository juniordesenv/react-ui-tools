import { Autocomplete, Input } from '@/components';
import { useForm } from '@/hooks';
import styled from '@emotion/styled';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    > div {
      margin: 8px;
    }
  }
`;

const options = [{
  id: 'b44d5556-700e-497e-a9a4-6be3f11dbc85', name: '10ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56896, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c0957778-e412-468c-97d9-3aa584e5d48e', name: '10ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56421, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b30558e7-97a6-4a0d-969f-5b514b9a5885', name: '10ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57058, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e970d332-8a49-41e3-9978-f50298edaa6c', name: '10ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57245, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ef2f87d9-849b-453e-b70b-02f2acc204f9', name: '10ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56979, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bb6f3b36-5fd1-4084-80d5-1d2aaeebe639', name: '10ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56864, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e2a9bd60-1527-4a88-b3fb-5baa8fd8806b', name: '10ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57398, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd17be085-e536-496c-92da-cfb73ecb5c0c', name: '10ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57446, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '51ba0fe5-9a27-441b-8feb-9e750bfc6dd2', name: '10ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57093, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '604e0750-fa8b-4f63-8de0-4edeeaeea35b', name: '10ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57483, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5b7c7801-0579-42c6-8b0f-5d7a12936b40', name: '10ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56580, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd8cf1712-9ecd-4dbb-9ca3-4153e58eaa1b', name: '10ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56711, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '78e38014-aa83-4cc2-b835-36a6367659ee', name: '10ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56275, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b33abcbe-86e5-4f22-aeb3-374ebf4c8fb3', name: '10ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57603, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '733c88cb-094b-4e15-89e7-b7f5c3eab687', name: '10ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56795, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e391b13f-217e-409e-9c50-cfff7f177538', name: '10ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56111, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '35c4e1c6-7d55-4f37-8ca2-0bba5470baed', name: '11ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56897, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4e811024-8014-4c51-ba1e-2a9b72c8bb48', name: '11ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56422, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '80025e2d-02a9-4999-98af-211da5dbf537', name: '11ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57059, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '29c68278-448b-434c-9295-461e04571876', name: '11ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57246, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a14a827c-d309-4a2f-9b41-6a0d4cd3846c', name: '11ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56955, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e55ec574-1cba-47f8-8dde-e88dc853cb1e', name: '11ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56865, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c894457f-187a-4c0b-934d-b8c2ae30e542', name: '11ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57399, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e8d98d47-e02b-42e9-94dd-5d83b230d471', name: '11ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57094, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9af6bcc6-ea14-46d5-a101-1b290be6718c', name: '11ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57484, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd5e8ea4b-8563-4512-b1d0-a21550fdf2a7', name: '11ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56581, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fc606178-4537-46d5-8d54-454057798ce8', name: '11ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56712, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2c967d27-ecc1-4119-8946-340f86442fa3', name: '11ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56276, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '27539981-2bcf-4b46-adeb-4e0d5f502c00', name: '11ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57604, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '79431b62-80b2-4da0-a7a4-7fb5265220d6', name: '11ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56796, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4176c793-c405-44ef-a006-e8086c1f5227', name: '11ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56112, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a881fcea-7ce2-46d9-ad62-6703f6df1181', name: '12ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56898, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '976591f7-cee3-411c-b4ae-4f6c1097e4e0', name: '12ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56423, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2ed59518-d4dd-4953-bb55-6666a0c8e917', name: '12ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57060, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5192e152-c12d-415c-bda7-ebb7e959e5f8', name: '12ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57247, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b306a081-7cee-4ddf-85dd-ff4ca8d92d35', name: '12ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56956, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a5891c91-63c1-4b54-99be-65693d7a8f8c', name: '12ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56866, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7da9793f-9989-4f9c-8f81-3be257e9a716', name: '12ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57400, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '805ff0ec-d594-4e9d-b87a-e6e6c8dbd39a', name: '12ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57095, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '792dcde9-8c68-4c69-a291-ff0e3aad6f49', name: '12ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56582, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '202cd521-5343-486f-a316-8a5aeeef5600', name: '12ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56713, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7fb42bb0-cb64-427a-9e47-e29daf5303a5', name: '12ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56277, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'eaddee9d-8cd0-41e2-95e5-21441913b006', name: '12ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57605, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd59d9264-6c0f-4b5e-b4de-36cb2bb04fee', name: '12ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56797, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '965fef76-6e94-4697-a982-567f19106f0a', name: '12ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56113, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8d729d73-1cde-4309-8adb-a50a1cc44dba', name: '13ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56899, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd1363863-fde2-4c9f-9b8e-892bb0da8a9d', name: '13ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56424, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1c91496a-a889-43fe-a57e-b8fced0aece0', name: '13ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57061, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '412e5661-aa7d-4e52-b075-d39c02c72c01', name: '13ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56957, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'efecd0aa-1d53-412c-a5a9-0c8513a849f0', name: '13ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56867, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '032f7d9a-1a1d-49f8-9485-57bf937e2cb1', name: '13ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57401, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd2300b65-6d26-43d4-84d5-e1883bbe119f', name: '13ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57096, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ef7d18e6-0bf6-4917-b5c6-791f45e1e602', name: '13ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56583, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1c1fc288-83b0-4a65-871f-d4189f6019bc', name: '13ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56714, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0ad04944-ea82-4746-97b3-eb5a74bdb808', name: '13ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56278, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '75fbb833-02d1-4c83-9389-7ca076df05c0', name: '13ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57606, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e53dc63f-7f16-42f2-9158-547ca84e309c', name: '13ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56798, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4bf44f7b-275c-44ce-bfdf-62b04ee1fa56', name: '13ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56114, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6931edd2-41e9-41be-941c-b1147adeca4d', name: '14ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56900, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '72658280-1056-4364-ac5b-347651859fb4', name: '14ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56425, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e7a448fa-5aba-44d0-acdb-98049290aabf', name: '14ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57062, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '460041df-0c62-4eca-b30c-86cea19df91e', name: '14ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56958, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'db240619-c03f-4bc9-8a70-d02c7467bf4e', name: '14ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56868, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '42e47a41-9f69-467d-b502-0f33939121a3', name: '14ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57402, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '99157e4d-498c-4685-b1fe-f9619696779c', name: '14ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57097, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7da1bda0-8438-40d1-bcb8-2210d988c917', name: '14ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56584, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e241e4a-442d-4ab9-9a8f-f5bf00f572a6', name: '14ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56715, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '619bb331-013d-4efc-bf0e-d7195cff392f', name: '14ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56279, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8348821c-46d3-4832-b178-c84357284765', name: '14ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57607, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9a04417c-fd3f-4183-8b0d-6b0a480738f7', name: '14ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56799, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '633a9a5c-ccf6-428f-a3e8-41f60b295f8f', name: '14ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56115, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd4c1cb40-52a9-4be6-b898-7c8535e18161', name: '15ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56901, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f2129b54-7f7d-489c-9bf1-347a0b440e24', name: '15ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56426, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5ae20d09-94fb-4d4e-bbcb-e4f728ff8a2b', name: '15ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57063, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6730e198-43b5-4f6d-9798-94f7d51c1716', name: '15ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56959, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a714da79-1d2b-4a94-b2e7-576585f909c7', name: '15ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56869, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '69111ce6-1cf4-4ad0-a253-8ae44482f64e', name: '15ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57403, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bee3f953-1dd6-4696-b581-f11f48979f32', name: '15ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57098, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dfe3d9a1-d7ea-40e6-9110-185ed1297217', name: '15ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56585, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3b61aff8-7139-4117-8edd-4648f66746e2', name: '15ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56716, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '57182946-9653-46fa-a5aa-b14218e51949', name: '15ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56280, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5d1f3781-fee6-43d8-9b75-cf6795583f99', name: '15ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56800, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f02ba4ed-a795-4b4b-83cf-ceb4942e1b2b', name: '15ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56116, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '55ddcda9-1198-4013-b29d-8f41195d1d99', name: '16ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56902, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '73fbb0c0-f2ba-4fb2-9df3-bbca7342aaf3', name: '16ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56427, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '348c84f3-39fe-44bd-bedc-3351ee31d5b8', name: '16ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57064, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c6d99f7b-428f-4074-a00d-76d6e4211453', name: '16ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56960, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '02524685-6cdc-4481-a00a-9820f4bf3697', name: '16ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56870, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dd9125f7-5664-419b-ab5f-7837291c9a39', name: '16ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57404, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4289f3d3-0619-46fb-9c76-0b7dbad27a22', name: '16ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57099, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bf710470-9aae-4bda-a81c-ec8f07d3ca2c', name: '16ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56586, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '20d62847-bc07-4cb8-acbe-addc9ab70111', name: '16ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56717, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '310ef8c3-c4d1-4968-a260-5f3be4256813', name: '16ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56281, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '09e932f3-a79e-4917-8f74-1385796cc22d', name: '16ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56801, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a7383008-fe01-4cf0-8db5-ee1cbdc17525', name: '16ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56117, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '66f4ceb0-5c2a-469f-8ada-668a602bf96e', name: '17ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56903, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '80182d5c-1be6-40c1-8077-7c25ddf17178', name: '17ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56428, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c31d4297-d96c-4100-baf9-4f6c6b496886', name: '17ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57065, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4a91a314-ae99-49d7-bc42-01b3115e0cfc', name: '17ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56961, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '96609b27-8e7c-4494-a752-3bedd50434d1', name: '17ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56871, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '727b08d2-9a9a-4dfa-9c77-4e6b8074fd63', name: '17ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57405, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '986d25e7-3ba6-46dc-a474-65d33ffbf517', name: '17ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57100, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '940e52b3-9fdf-4002-a067-f6c982fccfe4', name: '17ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56587, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ae605ba-bfd1-4e06-b300-9529ed10c03c', name: '17ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56718, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '25cd219e-ab5c-4188-9a1d-da0e3bfbd964', name: '17ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56282, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '807c0759-a124-4749-a60b-0cc4e1128287', name: '17ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56802, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd6ad2b96-fcd0-4477-8f07-c502aeaf111e', name: '17ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56118, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '113bfaed-b5e9-44bd-baa0-8e42250e4dcc', name: '18ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56904, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6c127591-9f4f-40fc-a79b-ffd425d0283e', name: '18ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56429, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e5d81492-ec1b-4f6a-bc96-1892c6f901b3', name: '18ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57066, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fda0bb32-c4a0-4de7-bc27-a74a90902bc1', name: '18ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56962, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6586049f-76f6-4259-9eb2-c511eca915d2', name: '18ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56872, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b2282555-03b7-4b8d-9009-26651974b0f0', name: '18ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57406, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4074caaf-c337-47f2-b338-8b0200db6dcd', name: '18ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57101, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd08c370-8395-40b4-83dd-e78deb4a045a', name: '18ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56588, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e95051c4-b7be-4ec5-91a4-2ee8714d72cf', name: '18ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56719, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3226a127-b9b0-449c-a36c-0dad57198b93', name: '18ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56283, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4674364b-376c-420e-983a-a68a21190a09', name: '18ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56803, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e9c0701b-b69b-4417-a98d-3fdd1e6b5ba6', name: '18ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56119, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '18015250-77e2-46ad-8c65-c782b231a983', name: '19ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56905, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '258771bc-959c-4ab3-ac23-68997e7fdd7d', name: '19ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56430, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '11f37673-1ce5-4ae8-ba21-103aab912553', name: '19ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57067, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7b5d522d-3798-4eaa-844a-d3787e37dfc3', name: '19ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56963, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '05f66b6b-90ea-44d8-ab00-12ca309252d4', name: '19ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57102, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1df2e971-0a3c-43cf-af55-9a77cfb2def9', name: '19ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56589, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e0149e56-0c6c-46ee-83af-d0f774855c51', name: '19ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56720, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8af5d2e6-4aef-4701-9575-97316a9ecc38', name: '19ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56284, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'abd66ec1-cdc3-4358-84a2-f0a537901030', name: '19ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56804, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e7fb94e-b163-4701-890f-a33e287835f5', name: '19ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56120, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '149edff9-52ca-4d84-95e5-c2bb1ac9c186', name: '1ª VARA CIVEL DA COMARCA DE ITAGUAI', document: null, juntoId: 56129, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '910252fc-fc39-48df-9145-bd32ae6c584b', name: '1ª VARA CIVEL DA COMARCA DE PEDERNEIRAS', document: null, juntoId: 57371, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5b906005-9c94-4a62-8c0a-a13b09075221', name: '1ª VARA CIVEL/ITAQUAQUECETUBA/SP', document: null, juntoId: 56290, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5d5b2cb2-db68-41ba-a190-7b88aff450a9', name: '1ª VARA DO TRABALHO ALTO ARAGAUIA/MT', document: null, juntoId: 57520, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1844d71c-ce29-46ea-b2ea-d5109cd0541c', name: '1ª VARA DO TRABALHO CHAPECÓ/SC', document: null, juntoId: 57125, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '25f67f6c-22b1-45db-9325-d3b481bcfa1f', name: '1ª VARA DO TRABALHO CONCÓRDIA/SC', document: null, juntoId: 57126, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '27410f5c-70bc-482f-a1bf-7d71753aa704', name: '1ª VARA DO TRABALHO CRICIÚMA/SC', document: null, juntoId: 57127, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2873f286-f517-446b-8942-5af76499e6e5', name: '1ª VARA DO TRABALHO CURITIBANOS/SC', document: null, juntoId: 57128, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b8b74645-83fb-4aee-b1a5-c84402387e21', name: '1ª VARA DO TRABALHO DA REGIÃO DO CARIRI/CE', document: null, juntoId: 56873, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6fe5bc68-c289-4ea1-9683-def289377cec', name: '1ª VARA DO TRABALHO DE ABAETETUBA/PA', document: null, juntoId: 56906, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '35e70331-f05c-43bc-9c0f-466df064a3e4', name: '1ª VARA DO TRABALHO DE AÇAILÂNDIA/MA', document: null, juntoId: 57615, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b468d6e9-b584-41cc-a288-f0fed24bb596', name: '1ª VARA DO TRABALHO DE ADAMANTINA/SP', document: null, juntoId: 57323, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e8c9fe3-7933-4058-a611-439c66307c3a', name: '1ª VARA DO TRABALHO DE ÁGUA BOA/MT', document: null, juntoId: 57521, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5b0707da-a9f0-4055-bd01-23b890ae86ed', name: '1ª VARA DO TRABALHO DE ALAGOINHAS/BA', document: null, juntoId: 56721, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6576bb0a-092f-4037-a83c-b737221ee342', name: '1ª VARA DO TRABALHO DE ALEGRETE/RS', document: null, juntoId: 56590, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f7519828-24a5-4f0a-b1f4-9d9d98133fa2', name: '1ª VARA DO TRABALHO DE ALFENAS/MG', document: null, juntoId: 56431, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd310cdd7-40e5-452b-a045-9640d7623ae6', name: '1ª VARA DO TRABALHO DE ALMENARA/MG', document: null, juntoId: 56432, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ca1d26ce-fd31-4c75-8ac9-d0ed419d3e78', name: '1ª VARA DO TRABALHO DE ALTA FLORESTA/MT', document: null, juntoId: 57522, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'eb6e2bbc-0dbc-4b54-b296-a32b551fb46d', name: '1ª VARA DO TRABALHO DE ALTAMIRA/PA', document: null, juntoId: 56907, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f3df489b-b860-4ad1-bcde-f714fee2e3ba', name: '1ª VARA DO TRABALHO DE ALVORADA/RS', document: null, juntoId: 56591, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c4ccb662-2e4e-43cf-bab7-13f895092c37', name: '1ª VARA DO TRABALHO DE AMAMBAI/MS', document: null, juntoId: 57559, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ef58fad3-38c8-4cc9-ad76-15407feaea29', name: '1ª VARA DO TRABALHO DE AMERICANA/SP', document: null, juntoId: 57248, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '585ab299-d6cf-4902-8a37-8a4cc1ed5bd5', name: '1ª VARA DO TRABALHO DE AMPARO/SP', document: null, juntoId: 57324, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b510c4f5-f234-488a-9c8c-5285f96db5fc', name: '1ª VARA DO TRABALHO DE ANANINDEUA/PA', document: null, juntoId: 56908, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '243447a8-e35d-4bcd-93c6-0fb83d4d8a8e', name: '1ª VARA DO TRABALHO DE ANÁPOLIS/GO', document: null, juntoId: 57407, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'eed5b1c0-1821-4427-9e30-8fef0255ab1e', name: '1ª VARA DO TRABALHO DE ANDRADINA/SP', document: null, juntoId: 57325, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7ce50f1c-7e7d-4ac8-a1b0-a33c8cfcd63f', name: '1ª VARA DO TRABALHO DE ANGRA DOS REIS/RJ', document: null, juntoId: 56121, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6f07dc3f-797c-4e8f-a4b4-51b072b73980', name: '1ª VARA DO TRABALHO DE APARECIDA DE GOIÂNIA/GO', document: null, juntoId: 57408, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '61bd4153-af1a-47de-941b-ff4954b0a9db', name: '1ª VARA DO TRABALHO DE APARECIDA/SP', document: null, juntoId: 57326, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ff0b5da2-c118-45b1-ba9c-914c68cd2110', name: '1ª VARA DO TRABALHO DE APUCARANA/PR', document: null, juntoId: 56964, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '78668d7e-6fa2-4468-9ca5-376062bd46fa', name: '1ª VARA DO TRABALHO DE AQUIDAUANA/MS', document: null, juntoId: 57560, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae7de887-5eab-4464-bb59-9a350f2585f8', name: '1ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57468, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a639aa8f-20ff-4d50-9f25-c5e15db1d371', name: '1ª VARA DO TRABALHO DE ARACATI/CE', document: null, juntoId: 56874, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e58e7487-e0fa-460c-a593-228226147e9e', name: '1ª VARA DO TRABALHO DE ARAÇATUBA/SP', document: null, juntoId: 57249, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2ed15649-5ea2-4bc9-9b88-4222e569fc57', name: '1ª VARA DO TRABALHO DE ARAÇUAÍ/MG', document: null, juntoId: 56433, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '37f94828-dc74-4388-b7e8-4459fd0c848b', name: '1ª VARA DO TRABALHO DE ARAGUAÍNA/TO', document: null, juntoId: 57068, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ff25b463-806c-43e1-9f58-ecf8c00e1459', name: '1ª VARA DO TRABALHO DE ARAGUARI/MG', document: null, juntoId: 56434, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c4b98f0d-6067-4e8a-afe2-8a07147a263b', name: '1ª VARA DO TRABALHO DE ARAPIRACA/AL', document: null, juntoId: 57447, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9d1c8e07-4e19-44a9-a801-70d18062d492', name: '1ª VARA DO TRABALHO DE ARAPONGAS/PR', document: null, juntoId: 56965, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'de8b4b8e-a03a-48f6-87f1-555947b3536a', name: '1ª VARA DO TRABALHO DE ARARANGUÁ/SC', document: null, juntoId: 57129, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '93fdf3f2-2221-4404-99c8-6e7d76b4be91', name: '1ª VARA DO TRABALHO DE ARARAQUARA/SP', document: null, juntoId: 57250, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3732dc86-037c-4a03-924d-296a6bd50e90', name: '1ª VARA DO TRABALHO DE ARARAS/SP', document: null, juntoId: 57327, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2290937d-45e4-4741-98bf-1b4e3ad69827', name: '1ª VARA DO TRABALHO DE ARARIPINA/PE', document: null, juntoId: 56805, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8c6c422c-cbd9-4eef-a3ef-1536b7e6df91', name: '1ª VARA DO TRABALHO DE ARARUAMA/RJ', document: null, juntoId: 56122, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2258b595-522d-4b39-94ef-bc438f974749', name: '1ª VARA DO TRABALHO DE ARAUCÁRIA/PR', document: null, juntoId: 56966, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '79f052d4-04f8-4e6a-8d09-a766296b01fa', name: '1ª VARA DO TRABALHO DE ARAXÁ/MG', document: null, juntoId: 56435, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '76b82568-29fa-4e41-8705-d711fe9c1025', name: '1ª VARA DO TRABALHO DE AREIA/PB', document: null, juntoId: 57185, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dcbce616-9c9b-49af-a0c9-9adf5b24cf51', name: '1ª VARA DO TRABALHO DE ARIQUEMES/RO', document: null, juntoId: 57212, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '654d9ab3-f54d-4a54-b3cc-478a606af55f', name: '1ª VARA DO TRABALHO DE ARROIO GRANDE/RS', document: null, juntoId: 56592, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8f1d784b-98f3-4042-a2f1-1bbf09212fa0', name: '1ª VARA DO TRABALHO DE ASSIS CHATEAUBRIAND/PR', document: null, juntoId: 56967, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b6be485c-9893-480e-8042-5a7bbd957015', name: '1ª VARA DO TRABALHO DE ASSIS/SP', document: null, juntoId: 57251, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '21e2cfff-cfcf-4e62-902e-87b4e53e3e59', name: '1ª VARA DO TRABALHO DE ASSÚ/RN', document: null, juntoId: 57485, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6f7d746e-625a-43b8-9c3c-109f1f06f9be', name: '1ª VARA DO TRABALHO DE ATALAIA/AL', document: null, juntoId: 57448, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2b54ad2d-a66e-41a2-9be0-8720c280e53c', name: '1ª VARA DO TRABALHO DE ATIBAIA/SP', document: null, juntoId: 57328, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a739832f-c003-4469-8b4c-62a334e7119a', name: '1ª VARA DO TRABALHO DE AVARÉ/SP', document: null, juntoId: 57329, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '61f508e0-3e4f-452d-952b-e21ee134bca4', name: '1ª VARA DO TRABALHO DE BACABAL/MA', document: null, juntoId: 57616, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8fd3ad3c-7a08-4b4f-a0d9-43656193521c', name: '1ª VARA DO TRABALHO DE BAGÉ/RS', document: null, juntoId: 56593, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd69e4cc1-2b7c-4723-a3e8-d403c91a0485', name: '1ª VARA DO TRABALHO DE BALNEÁRIO CAMBORIÚ/SC', document: null, juntoId: 57130, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '92690277-1651-482a-89f6-2e796cdbbb84', name: '1ª VARA DO TRABALHO DE BALSAS/MA', document: null, juntoId: 57617, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b7f99d81-8ba4-47ee-bd34-498a2c39b897', name: '1ª VARA DO TRABALHO DE BANDEIRANTES/PR', document: null, juntoId: 56968, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3177ec96-7251-4fef-8fd2-d280e69a3473', name: '1ª VARA DO TRABALHO DE BARBACENA/MG', document: null, juntoId: 56436, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5140503b-b087-4d18-98da-d96e54cae33d', name: '1ª VARA DO TRABALHO DE BARRA DO CORDA/MA', document: null, juntoId: 57618, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c8a8559d-41da-4198-924d-0c863097d15d', name: '1ª VARA DO TRABALHO DE BARRA DO GARÇAS/MT', document: null, juntoId: 57523, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '40eaed45-11f0-471f-88cd-9b392eef678f', name: '1ª VARA DO TRABALHO DE BARRA DO PIRAÍ/RJ', document: null, juntoId: 56123, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5d565f3f-0e3c-4658-b570-235a709e030a', name: '1ª VARA DO TRABALHO DE BARRA MANSA/RJ', document: null, juntoId: 56124, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '21f193db-53f2-42fa-865c-a89d97bc4842', name: '1ª VARA DO TRABALHO DE BARREIRAS/BA', document: null, juntoId: 56722, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '89be0dc4-de48-4f3e-8718-2b7f61d14097', name: '1ª VARA DO TRABALHO DE BARREIRINHAS/MA', document: null, juntoId: 57619, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ef75f78a-e812-4fff-af4f-05caff130b58', name: '1ª VARA DO TRABALHO DE BARREIROS/PE', document: null, juntoId: 56806, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e6f51389-ac1f-4153-890e-48048b52d07c', name: '1ª VARA DO TRABALHO DE BARRETOS/SP', document: null, juntoId: 57330, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '206b41fa-fa7b-46ad-bddb-f8d93d6034b4', name: '1ª VARA DO TRABALHO DE BARUERI /SP', document: null, juntoId: 56257, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c7ff4ec9-b93b-4601-93ed-f277a0095ad6', name: '1ª VARA DO TRABALHO DE BATAGUASSU/MS', document: null, juntoId: 57561, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ee69484-7ab4-4f69-a621-4489e9630d44', name: '1ª VARA DO TRABALHO DE BATATAIS/SP', document: null, juntoId: 57331, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '95ad9881-25ef-4d88-bfa2-a453371326ce', name: '1ª VARA DO TRABALHO DE BATURITÉ/CE', document: null, juntoId: 56875, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8d6beaca-c18a-451d-8e54-ccfac4377c3a', name: '1ª VARA DO TRABALHO DE BAURU/SP', document: null, juntoId: 57252, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7993b295-6541-47a8-88e8-c0c80a66cbbf', name: '1ª VARA DO TRABALHO DE BEBEDOURO/SP', document: null, juntoId: 57332, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b91bd5e7-cfc1-4ee9-b357-c702d50d626a', name: '1ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56909, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '20a70ddd-e12e-4050-b48b-4dd1306e43ec', name: '1ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56437, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0acc3967-0a34-4aea-b683-11f7f5a5286f', name: '1ª VARA DO TRABALHO DE BELO JARDIM/PE', document: null, juntoId: 56807, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7459d9cb-ac99-45cb-a44b-5b2b14f7822f', name: '1ª VARA DO TRABALHO DE BENTO GONÇALVES/RS', document: null, juntoId: 56594, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fa0c1f98-4d63-49e9-8a71-3c9e48fe8984', name: '1ª VARA DO TRABALHO DE BETIM/MG', document: null, juntoId: 56438, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a4d097d9-a21b-4b7f-bf73-4cabc7a2ed0d', name: '1ª VARA DO TRABALHO DE BIRIGUI/SP', document: null, juntoId: 57333, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8d15b8a0-21a2-447c-acd6-d7597cfb5d96', name: '1ª VARA DO TRABALHO DE BLUMENAU/SC', document: null, juntoId: 57131, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '28127a36-3a69-4459-9681-7e6d9418f02c', name: '1ª VARA DO TRABALHO DE BOA VISTA/RO', document: null, juntoId: 57103, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8fefbc53-54e4-4f02-8005-c102872a776c', name: '1ª VARA DO TRABALHO DE BOM DESPACHO/MG', document: null, juntoId: 56439, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '080454ae-07a2-46cc-8206-5280225f1809', name: '1ª VARA DO TRABALHO DE BOM JESUS DA LAPA/BA', document: null, juntoId: 56723, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c37df1fd-2dd3-4382-afa4-a8025c1e9764', name: '1ª VARA DO TRABALHO DE BOM JESUS/PI', document: null, juntoId: 57506, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '25a8e14f-f4f8-4159-a521-eec5dfb1847a', name: '1ª VARA DO TRABALHO DE BOTUCATU/SP', document: null, juntoId: 57334, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8210bdd9-85ae-4789-a78f-cdd87065a53a', name: '1ª VARA DO TRABALHO DE BRAGANÇA PAULISTA/SP', document: null, juntoId: 57335, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c4af71dd-7d3a-45fa-a986-9cee9804eb74', name: '1ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57069, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1195c409-0293-417c-81b3-e999963762b6', name: '1ª VARA DO TRABALHO DE BREVES/PA', document: null, juntoId: 56910, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '153dfd13-86dc-4f58-9565-c2289fc4cd07', name: '1ª VARA DO TRABALHO DE BRUMADO/BA', document: null, juntoId: 56724, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '77e510af-ddbe-4db1-a4e0-0b7d1426abbf', name: '1ª VARA DO TRABALHO DE BRUSQUE/SC', document: null, juntoId: 57132, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c974b9d0-dbed-4c18-9668-f45230af6f3e', name: '1ª VARA DO TRABALHO DE BURITIS/RO', document: null, juntoId: 57229, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8a848e95-1901-4060-817c-59a540e6b69a', name: '1ª VARA DO TRABALHO DE CABO DE SANTO AGOSTINHO/PE', document: null, juntoId: 56808, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5894c807-6738-4e15-b568-b3e674317cf0', name: '1ª VARA DO TRABALHO DE CABO FRIO/RJ', document: null, juntoId: 56125, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ca679587-d4d0-480d-bdbb-0db34c3523c5', name: '1ª VARA DO TRABALHO DE CAÇADOR/SC', document: null, juntoId: 57133, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '57aa9ba4-b84a-4065-ba79-b4b49ea1386f', name: '1ª VARA DO TRABALHO DE CAÇAPAVA/SP', document: null, juntoId: 57336, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e404cc74-31eb-441b-a2d5-62156f9a5cee', name: '1ª VARA DO TRABALHO DE CÁCERES/MT', document: null, juntoId: 57524, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b16f5b37-f988-45ad-8691-562040194df0', name: '1ª VARA DO TRABALHO DE CACHOEIRA DO SUL/RS', document: null, juntoId: 56595, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e2eb1bd9-6bc3-4994-a278-4dd40ff8197c', name: '1ª VARA DO TRABALHO DE CACHOEIRINHA/RS', document: null, juntoId: 56596, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3604ca29-fdd7-4dd3-af3e-5441355a2674', name: '1ª VARA DO TRABALHO DE CACHOEIRO DE ITAPEMIRIM/ES', document: null, juntoId: 57585, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4a60cc62-07ba-4780-a402-6244e415a27a', name: '1ª VARA DO TRABALHO DE CACOAL/RO', document: null, juntoId: 57230, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd12df56-361c-44b6-9906-4348f61ae60b', name: '1ª VARA DO TRABALHO DE CAICÓ/RN', document: null, juntoId: 57486, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd84902de-4470-43ed-b541-824e7f7ad220', name: '1ª VARA DO TRABALHO DE CAIEIRAS /SP', document: null, juntoId: 56258, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1b56889a-c6aa-4262-b72a-184f24dfbe43', name: '1ª VARA DO TRABALHO DE CAJAMAR /SP', document: null, juntoId: 56259, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '69c0744a-8e45-4b0a-b500-11199f12e828', name: '1ª VARA DO TRABALHO DE CAJAZEIRAS/PB', document: null, juntoId: 57186, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2eab96c4-d8d2-43c6-a91d-f2f31d4a350d', name: '1ª VARA DO TRABALHO DE CAJURU/SP', document: null, juntoId: 57337, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '72494867-2294-4cce-bf8c-2a03adbd4ec7', name: '1ª VARA DO TRABALHO DE CALDAS NOVAS/GO', document: null, juntoId: 57409, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '19f663c5-0556-475d-9941-64a44dfb2403', name: '1ª VARA DO TRABALHO DE CAMAÇARI/BA', document: null, juntoId: 56725, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c633f8f2-95fc-4f8f-aef9-45b4fda65fad', name: '1ª VARA DO TRABALHO DE CAMAQUÃ/RS', document: null, juntoId: 56597, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f7f57195-854e-4add-b7d1-ad1f00768f53', name: '1ª VARA DO TRABALHO DE CAMBARÁ/PR', document: null, juntoId: 56969, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f9439e51-3bad-4eb7-b440-4569d24e924d', name: '1ª VARA DO TRABALHO DE CAMBÉ/PR', document: null, juntoId: 56970, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ce6973d0-f075-46a7-a739-ad8779e806dc', name: '1ª VARA DO TRABALHO DE CAMPINA GRANDE/PB', document: null, juntoId: 57187, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b6fe4954-6aed-4aa4-b6d7-4d1e09af144e', name: '1ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57253, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '00dbc33a-3527-4975-b1db-4d567f34aea9', name: '1ª VARA DO TRABALHO DE CAMPO GRANDE/MS', document: null, juntoId: 57562, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0f0aefc0-9dd3-411e-9a86-6ad981c2766d', name: '1ª VARA DO TRABALHO DE CAMPO LIMPO PAULISTA/SP', document: null, juntoId: 57338, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cb0efd12-4ae8-44d0-8a77-c77da0b998d7', name: '1ª VARA DO TRABALHO DE CAMPO MOURÃO/PR', document: null, juntoId: 56971, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dace29e0-1c5d-403c-8119-484c9de699ad', name: '1ª VARA DO TRABALHO DE CAMPO NOVO DO PARECIS/MT', document: null, juntoId: 57525, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5ef1fe00-9225-41e2-989e-a6ae3983e04f', name: '1ª VARA DO TRABALHO DE CAMPOS DOS GOYTACAZES/RJ', document: null, juntoId: 56126, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '916cb6e8-d483-4693-bb3d-55f230b7c25a', name: '1ª VARA DO TRABALHO DE CANDEIAS/BA', document: null, juntoId: 56726, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f9af2285-956a-4ba4-a76a-787d96deb440', name: '1ª VARA DO TRABALHO DE CANOAS/RS', document: null, juntoId: 56598, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c8e848c8-8fd7-4eca-a179-bda8b1269488', name: '1ª VARA DO TRABALHO DE CANOINHAS/SC', document: null, juntoId: 57134, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6152f236-c0a6-4c8e-898e-4ac80b5223dc', name: '1ª VARA DO TRABALHO DE CAPANEMA/PA', document: null, juntoId: 56911, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1331b237-832e-4f7b-879e-a1212454854d', name: '1ª VARA DO TRABALHO DE CAPÃO BONITO/SP', document: null, juntoId: 57339, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'af0e8830-e607-42ec-8a74-2ca3a8501ece', name: '1ª VARA DO TRABALHO DE CAPIVARI/SP', document: null, juntoId: 57340, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9077ab31-8880-4f2f-a201-f5fcf4e99085', name: '1ª VARA DO TRABALHO DE CARAGUATATUBA/SP', document: null, juntoId: 57341, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b08a8d63-d89f-4501-bbb0-acf7daaf3d7f', name: '1ª VARA DO TRABALHO DE CARAPICUÍBA /SP', document: null, juntoId: 56260, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5d6e1fd0-a259-4984-94e4-0c4fcd948fe0', name: '1ª VARA DO TRABALHO DE CARATINGA/MG', document: null, juntoId: 56440, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e153bd33-2649-43fa-bf41-b374486cdf21', name: '1ª VARA DO TRABALHO DE CARAZINHO/RS', document: null, juntoId: 56599, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd049f3a-e1be-479f-ad50-ce3c549444a2', name: '1ª VARA DO TRABALHO DE CARPINA/PE', document: null, juntoId: 56809, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fb35c058-d6c9-428a-ba0e-699d7ab03dfa', name: '1ª VARA DO TRABALHO DE CARUARU/PE', document: null, juntoId: 56810, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '903803fa-a40f-4e77-9809-ff08da4b3db3', name: '1ª VARA DO TRABALHO DE CASCAVEL/PR', document: null, juntoId: 56972, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a59ca02f-0feb-480e-a239-1e36a55c5ac5', name: '1ª VARA DO TRABALHO DE CASSILÂNDIA/MS', document: null, juntoId: 57563, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2690511e-7b8e-43ca-8aac-636744fda2aa', name: '1ª VARA DO TRABALHO DE CASTANHAL/PA', document: null, juntoId: 56912, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b8c5c603-0868-4269-adbb-3d022a9d19cd', name: '1ª VARA DO TRABALHO DE CASTRO/PR', document: null, juntoId: 56973, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '59e8e16e-c8da-44d5-b752-c3c3c14169e4', name: '1ª VARA DO TRABALHO DE CATAGUASES/MG', document: null, juntoId: 56441, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b02bcb9b-d4b4-4253-9435-41d9cf8a4d56', name: '1ª VARA DO TRABALHO DE CATALÃO/GO', document: null, juntoId: 57410, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd1c3905d-999d-44ab-a257-78d13696f70c', name: '1ª VARA DO TRABALHO DE CATANDUVA/SP', document: null, juntoId: 57254, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c82d18fd-d53f-4aed-ac50-5c300c6aeb7e', name: '1ª VARA DO TRABALHO DE CATENDE/PE', document: null, juntoId: 56811, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '11ae8c58-d0ac-4883-9e59-c235d3569bc6', name: '1ª VARA DO TRABALHO DE CATOLÉ DO ROCHA/PB', document: null, juntoId: 57188, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e1168197-4191-43c9-8567-e3940c161cfa', name: '1ª VARA DO TRABALHO DE CAUCAIA/CE', document: null, juntoId: 56876, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ac6ad5e3-cda6-4b2a-aad4-5661ad2f416d', name: '1ª VARA DO TRABALHO DE CAXAMBU/MG', document: null, juntoId: 56442, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6d1b199f-0290-4e05-9021-bb450a2765cb', name: '1ª VARA DO TRABALHO DE CAXIAS DO SUL/RS', document: null, juntoId: 56600, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '90ce8dfe-d033-4f73-8341-fc7fddadd4a2', name: '1ª VARA DO TRABALHO DE CAXIAS/MA', document: null, juntoId: 57620, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a4df3953-3ce2-47d6-b038-cfe3da10c686', name: '1ª VARA DO TRABALHO DE CEARÁ-MIRIM/RN', document: null, juntoId: 57487, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ff539fbd-3d18-4413-87fe-2cf699468631', name: '1ª VARA DO TRABALHO DE CERES/GO', document: null, juntoId: 57411, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '280c8dd2-b3be-4971-81ec-7b20bdb0acb4', name: '1ª VARA DO TRABALHO DE CHAPADINHA/MA', document: null, juntoId: 57621, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f7d875d3-c01e-4cab-aa51-cf63fa291589', name: '1ª VARA DO TRABALHO DE CIANORTE/PR', document: null, juntoId: 56974, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '28068776-4727-4cf1-b8f7-863f38e8a0e2', name: '1ª VARA DO TRABALHO DE COARI/AM', document: null, juntoId: 57104, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1251a3d0-c5d4-4f53-abca-abab43601a03', name: '1ª VARA DO TRABALHO DE COLATINA/ES', document: null, juntoId: 57587, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8b5945fb-f44a-40c9-88e1-fc1421368361', name: '1ª VARA DO TRABALHO DE COLÍDER/MT', document: null, juntoId: 57526, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7580696a-bf57-4fb5-9f47-4abca3aea70f', name: '1ª VARA DO TRABALHO DE COLNIZA (REMOVIDA PARA VÁZREA GRANDE!!!)/MT', document: null, juntoId: 57555, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c2b926ed-d425-48ec-902c-7be672ce63d1', name: '1ª VARA DO TRABALHO DE COLOMBO/PR', document: null, juntoId: 56975, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '62d518a9-fa07-43c2-8eb7-c96ebb6b0e2f', name: "1ª VARA DO TRABALHO DE COLORADO D'OESTE/RO", document: null, juntoId: 57231, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '95003ff7-b0ea-4c8b-92e9-fdaf219d9d62', name: '1ª VARA DO TRABALHO DE CONCEIÇÃO DO ARAGUAIA/PA', document: null, juntoId: 56913, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '90aa004b-d29d-4d65-ba3b-7c361b24f290', name: '1ª VARA DO TRABALHO DE CONCEIÇÃO DO COITÉ/BA', document: null, juntoId: 56727, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '301e3261-5883-477b-bceb-a1c3c10a7847', name: '1ª VARA DO TRABALHO DE CONFRESA/MT', document: null, juntoId: 57556, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f6286a27-c5f7-42ae-83ef-ee3f13e744c0', name: '1ª VARA DO TRABALHO DE CONSELHEIRO LAFAIETE/MG', document: null, juntoId: 56443, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ec4fd27b-1ae7-4f20-829f-926da9e67b66', name: '1ª VARA DO TRABALHO DE CONTAGEM/MG', document: null, juntoId: 56444, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e46e3a31-4514-4364-b4b1-41f39b35350f', name: '1ª VARA DO TRABALHO DE CORNÉLIO PROCÓPIO/PR', document: null, juntoId: 56976, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9855d9be-7fcb-4d04-a57b-efb30e1cab44', name: '1ª VARA DO TRABALHO DE CORONEL FABRICIANO/MG', document: null, juntoId: 56445, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0d8694c2-8ca6-4dc9-92b0-17ff67e98348', name: '1ª VARA DO TRABALHO DE CORRENTE/PI', document: null, juntoId: 57507, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '24a03cbd-b091-4bed-86cf-10c956db89b1', name: '1ª VARA DO TRABALHO DE CORUMBÁ/MS', document: null, juntoId: 57564, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '14e030cb-3361-4c76-b48c-84528f2327cc', name: '1ª VARA DO TRABALHO DE CORURIPE/AL', document: null, juntoId: 57449, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e3348c5-be3a-4a23-ac73-080e072907e7', name: '1ª VARA DO TRABALHO DE COTIA /SP', document: null, juntoId: 56261, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '84a9c175-c9aa-487a-ab85-20f4d89c72fd', name: '1ª VARA DO TRABALHO DE COXIM/MS', document: null, juntoId: 57565, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '13ed8a4c-130c-4e6a-8fc6-c8b34c63f15a', name: '1ª VARA DO TRABALHO DE CRATEÚS/CE', document: null, juntoId: 56877, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '605fbbb5-4cdd-441b-b7a4-d928f59734ef', name: '1ª VARA DO TRABALHO DE CRAVINHOS/SP', document: null, juntoId: 57342, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '324845af-ff9e-45ad-8f23-50464f4904c1', name: '1ª VARA DO TRABALHO DE CRUZ ALTA/RS', document: null, juntoId: 56601, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '579467d5-fad6-4c18-9eff-6cd3a620c5c5', name: '1ª VARA DO TRABALHO DE CRUZ DAS ALMAS/BA', document: null, juntoId: 56728, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5d1f534e-1cd4-41c4-8c30-ee7b8b96c247', name: '1ª VARA DO TRABALHO DE CRUZEIRO DO SUL/AC', document: null, juntoId: 57232, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '98fc03b9-f9c6-4d84-bd93-094db2a86f2d', name: '1ª VARA DO TRABALHO DE CRUZEIRO/SP', document: null, juntoId: 57343, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd29229e2-6244-43d7-8e40-35c07675bacf', name: '1ª VARA DO TRABALHO DE CUBATÃO /SP', document: null, juntoId: 56262, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8663a9e1-e30b-4e8c-b0c2-6717fbd067b1', name: '1ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57527, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3420fba9-4033-4054-a852-00da879ad601', name: '1ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 56978, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7414db7f-2ace-4163-be50-520c3a36948a', name: '1ª VARA DO TRABALHO DE CURRAIS NOVOS/RN', document: null, juntoId: 57488, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5767bfed-fe66-4a21-b7f7-7c9b52691b7b', name: '1ª VARA DO TRABALHO DE CURVELO/MG', document: null, juntoId: 56446, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '49deb96a-e7ca-477a-958d-f9dc226e2dad', name: '1ª VARA DO TRABALHO DE DIADEMA /SP', document: null, juntoId: 56263, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a216d283-ede4-4ede-abf4-ee3c8b6348df', name: '1ª VARA DO TRABALHO DE DIAMANTINA/MG', document: null, juntoId: 56447, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ea003b37-3c4b-479f-8ad1-d707ff92fdc3', name: '1ª VARA DO TRABALHO DE DIAMANTINO/MT', document: null, juntoId: 57528, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4a7c6993-4972-47d5-b3db-e49b8e1003a7', name: '1ª VARA DO TRABALHO DE DIANÓPOLIS/TO', document: null, juntoId: 57070, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0fdacf84-e3f2-4f58-859b-ed5dcb92485a', name: '1ª VARA DO TRABALHO DE DIVINÓPOLIS/MG', document: null, juntoId: 56448, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1a13e3ad-c816-4c15-b427-f29f94149ab2', name: '1ª VARA DO TRABALHO DE DOIS VIZINHOS/PR', document: null, juntoId: 56980, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '82abeff4-a006-40be-8a2c-4d968ff02bc7', name: '1ª VARA DO TRABALHO DE DOURADOS/MS', document: null, juntoId: 57566, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c88ed972-d640-4a29-9cae-d6b0c440b818', name: '1ª VARA DO TRABALHO DE DRACENA/SP', document: null, juntoId: 57344, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9c5e23ed-26f8-42f0-9344-232b77419e84', name: '1ª VARA DO TRABALHO DE DUQUE DE CAXIAS/RJ', document: null, juntoId: 56127, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '66b2e14b-bf31-4fc1-b657-40f37d90d1f7', name: '1ª VARA DO TRABALHO DE EIRUNEPÉ/AM', document: null, juntoId: 57105, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e714e121-4cfc-4042-a7e3-867087e51d95', name: '1ª VARA DO TRABALHO DE EMBU /SP', document: null, juntoId: 56264, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a533832c-9788-4c5a-899f-47199d6aa5c4', name: '1ª VARA DO TRABALHO DE ENCANTADO/RS', document: null, juntoId: 56602, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0616ebf2-9de7-4f8b-a41a-3177764bd733', name: '1ª VARA DO TRABALHO DE EPITACIOLÂNDIA/AC', document: null, juntoId: 57233, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '15cbbf6a-1ecb-44cb-b1d6-361d666ea3ef', name: '1ª VARA DO TRABALHO DE ERECHIM/RS', document: null, juntoId: 56603, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '74961355-2eef-4bde-864b-f822b431bcad', name: '1ª VARA DO TRABALHO DE ESCADA/PE', document: null, juntoId: 56812, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'afa8951d-88e5-401c-abd4-5c33ca6342be', name: '1ª VARA DO TRABALHO DE ESTÂNCIA VELHA/RS', document: null, juntoId: 56604, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '24eb2cf4-7928-47dd-b464-45bc41440612', name: '1ª VARA DO TRABALHO DE ESTÂNCIA/SE', document: null, juntoId: 57469, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3604608b-eeaa-4e6b-a034-61209e2fafa3', name: '1ª VARA DO TRABALHO DE ESTEIO/RS', document: null, juntoId: 56605, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4e606f09-1f45-43c2-9fda-914e4745cbc8', name: '1ª VARA DO TRABALHO DE ESTREITO/MA', document: null, juntoId: 57622, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '52b2bc69-776d-4de1-86a6-c5756d596258', name: '1ª VARA DO TRABALHO DE ESTRELA/RS', document: null, juntoId: 56606, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f9ff3ad6-d634-4b60-920e-f7da79153d8e', name: '1ª VARA DO TRABALHO DE EUCLIDES DA CUNHA/BA', document: null, juntoId: 56729, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '97155632-293f-4f78-a1dd-0db310f13c1f', name: '1ª VARA DO TRABALHO DE EUNÁPOLIS/BA', document: null, juntoId: 56730, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '392ab98a-0f11-4479-bee2-7b679cdf4b8c', name: '1ª VARA DO TRABALHO DE FARROUPILHA/RS', document: null, juntoId: 56607, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8edfacd3-5125-46d4-aa3a-d243365935b8', name: '1ª VARA DO TRABALHO DE FÁTIMA DO SUL/MS', document: null, juntoId: 57567, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '102c6194-9660-4038-aaab-6579dba4c8e8', name: '1ª VARA DO TRABALHO DE FEIJÓ/AC', document: null, juntoId: 57234, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0bd6f7d3-c5ea-4fa6-9be5-e514de28b89f', name: '1ª VARA DO TRABALHO DE FEIRA DE SANTANA/BA', document: null, juntoId: 56731, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0d058b45-be62-40da-8744-f8049739a576', name: '1ª VARA DO TRABALHO DE FERNANDÓPOLIS/SP', document: null, juntoId: 57345, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'adca9988-0e6d-47bc-ba48-ed9a8231def5', name: '1ª VARA DO TRABALHO DE FERRAZ DE VASCONCELOS /SP', document: null, juntoId: 56265, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9d4b20eb-f6d5-43cd-8879-fb48b32406e5', name: '1ª VARA DO TRABALHO DE FLORIANO/PI', document: null, juntoId: 57508, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '024a2700-539f-4579-891f-8fb29dc76706', name: '1ª VARA DO TRABALHO DE FORMIGA/MG', document: null, juntoId: 56449, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e40d91ed-2880-4dc8-82f5-f12775f24422', name: '1ª VARA DO TRABALHO DE FORMOSA/GO', document: null, juntoId: 57412, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cbc04aae-13c4-4c76-8572-3116af7cc3d2', name: '1ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56878, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b5b49da0-fb54-46d9-a204-cda5c37ad21d', name: '1ª VARA DO TRABALHO DE FOZ DO IGUAÇU/PR', document: null, juntoId: 56981, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b0ceba84-b5f0-498d-9e87-c5e9aab06d12', name: '1ª VARA DO TRABALHO DE FRAIBURGO/SC', document: null, juntoId: 57135, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'db53c735-76d4-4481-a5e8-89e0be7c330e', name: '1ª VARA DO TRABALHO DE FRANCA/SP', document: null, juntoId: 57255, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '424ad704-38a5-43f9-ba58-cdf4cff525b7', name: '1ª VARA DO TRABALHO DE FRANCISCO BELTRÃO/PR', document: null, juntoId: 56983, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0a135342-670a-4ac3-bb8d-192685290580', name: '1ª VARA DO TRABALHO DE FRANCO DA ROCHA /SP', document: null, juntoId: 56285, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4c414828-687f-4d0f-8598-8ea04e760af0', name: '1ª VARA DO TRABALHO DE FREDERICO WESTPHALEN/RS', document: null, juntoId: 56608, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '087f4536-7ff8-4140-a777-b22a58bb3f6b', name: '1ª VARA DO TRABALHO DE FRUTAL/MG', document: null, juntoId: 56450, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd5d9bca9-24df-430f-9fb5-205eb6986141', name: '1ª VARA DO TRABALHO DE GARANHUNS/PE', document: null, juntoId: 56813, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '84024639-207e-465b-a5fd-88082bc2f138', name: '1ª VARA DO TRABALHO DE GARÇA/SP', document: null, juntoId: 57346, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ecd3e796-8787-4a57-9690-bb5855e9161d', name: '1ª VARA DO TRABALHO DE GOIANA/PE', document: null, juntoId: 56814, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '679bb1f6-6540-4806-bcb9-439ae70a7c0d', name: '1ª VARA DO TRABALHO DE GOIANÉSIA/GO', document: null, juntoId: 57413, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '08e28820-ebfb-4120-82b2-de8d2a6e1038', name: '1ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57414, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c9eac891-a081-4afa-b75e-7172e907b510', name: '1ª VARA DO TRABALHO DE GOIANINHA/RN', document: null, juntoId: 57489, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1771cdc0-229e-4e40-8f0f-71c628e85d0f', name: '1ª VARA DO TRABALHO DE GOIÁS/GO', document: null, juntoId: 57415, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e35951a-88bb-4cf4-a916-f559e22274d4', name: '1ª VARA DO TRABALHO DE GOIATUBA/GO', document: null, juntoId: 57416, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cfdcb93e-836a-4817-bb97-d7a0dcf29940', name: '1ª VARA DO TRABALHO DE GOVERNADOR VALADARES/MG', document: null, juntoId: 56451, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7c95bf5c-ef69-49f6-90d5-8ff3a513bd88', name: '1ª VARA DO TRABALHO DE GRAMADO/RS', document: null, juntoId: 56609, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cc3f397a-3184-4f0b-9350-96ca18cd0c70', name: '1ª VARA DO TRABALHO DE GRAVATAÍ/RS', document: null, juntoId: 56610, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a91f0ee3-c821-4038-981f-6a099c17b8b5', name: '1ª VARA DO TRABALHO DE GUAÍBA/RS', document: null, juntoId: 56611, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e22b0452-f175-40e3-9120-fa967298d0ac', name: '1ª VARA DO TRABALHO DE GUAJARÁ-MIRIM/RO', document: null, juntoId: 57235, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0f069ea8-6e5a-4407-92f3-563762844c1d', name: '1ª VARA DO TRABALHO DE GUANAMBI/BA', document: null, juntoId: 56732, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'befb9681-7515-4ba8-80a0-d72e1243c615', name: '1ª VARA DO TRABALHO DE GUANHÃES/MG', document: null, juntoId: 56452, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6927c07f-b649-4fb7-9e79-c2a8fee76baa', name: '1ª VARA DO TRABALHO DE GUARABIRA/PB', document: null, juntoId: 57189, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9d4329b0-61e2-477d-9a40-bb436040bfe0', name: '1ª VARA DO TRABALHO DE GUARAÍ/TO', document: null, juntoId: 57071, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e7c8a606-5b6e-4e45-bbdb-a38dddd6b2f8', name: '1ª VARA DO TRABALHO DE GUARAPARI/ES', document: null, juntoId: 57588, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2d80729c-06b4-4f96-a211-e38540c15bc5', name: '1ª VARA DO TRABALHO DE GUARAPUAVA/PR', document: null, juntoId: 56984, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7c08d855-1241-4347-be1c-5124748063f0', name: '1ª VARA DO TRABALHO DE GUARATINGUETÁ/SP', document: null, juntoId: 57347, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '67eb5e50-5e9b-48b6-aaf2-13fc369d41f5', name: '1ª VARA DO TRABALHO DE GUARUJÁ /SP', document: null, juntoId: 56286, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c3314319-f20c-4765-b1ab-a62d5c8d17b8', name: '1ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56287, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '13136edc-f250-4997-b80f-bcf14ff5399e', name: '1ª VARA DO TRABALHO DE GUAXUPÉ/MG', document: null, juntoId: 56453, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e8554829-bea4-42c1-9518-1512cb48680c', name: '1ª VARA DO TRABALHO DE GURUPI/TO', document: null, juntoId: 57072, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c3124ef2-b2e2-473f-9f52-6f7d4e327664', name: '1ª VARA DO TRABALHO DE HORTOLÂNDIA/SP', document: null, juntoId: 57348, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '58aae557-9a0c-43e8-8fe4-463ec1f12002', name: '1ª VARA DO TRABALHO DE HUMAITÁ/AM', document: null, juntoId: 57106, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cb38c762-3e62-4111-af76-c46a45eb170a', name: '1ª VARA DO TRABALHO DE IGARASSU/PE', document: null, juntoId: 56815, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '569151b3-e8a9-4228-8d22-41812f27bcc8', name: '1ª VARA DO TRABALHO DE IGUATU/CE', document: null, juntoId: 56879, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '82b45fcc-73d2-418d-bc16-7d2bea543ecf', name: '1ª VARA DO TRABALHO DE IJUÍ/RS', document: null, juntoId: 56612, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '80837c12-05ed-41a7-b5c5-8e7744d7ecb7', name: '1ª VARA DO TRABALHO DE ILHÉUS/BA', document: null, juntoId: 56733, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '903ce673-a705-4214-9c63-0c7a6feab99f', name: '1ª VARA DO TRABALHO DE IMPERATRIZ/MA', document: null, juntoId: 57629, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e88a735a-52d7-4f5d-8299-a1820b768e2f', name: '1ª VARA DO TRABALHO DE INDAIATUBA/SP', document: null, juntoId: 57349, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '84d3e583-bf3d-45ed-a385-abc8843cddc5', name: '1ª VARA DO TRABALHO DE INHUMAS/GO', document: null, juntoId: 57417, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '47675670-87c3-4b7b-b781-89eccd3cd4bd', name: '1ª VARA DO TRABALHO DE IPIAÚ/BA', document: null, juntoId: 56734, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9c62d6d1-c931-45ec-ac68-7e60a5915e1f', name: '1ª VARA DO TRABALHO DE IPOJUCA/PE', document: null, juntoId: 56816, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3a2171cd-77ff-4d38-af62-4fea96433ed3', name: '1ª VARA DO TRABALHO DE IRATI/PR', document: null, juntoId: 56985, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ec3b8f11-70fd-454b-be09-06ef002639a2', name: '1ª VARA DO TRABALHO DE IRECÊ/BA', document: null, juntoId: 56735, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2c0f5e61-15a6-48c4-9391-0f7908b9a571', name: '1ª VARA DO TRABALHO DE ITABAIANA/PB', document: null, juntoId: 57190, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3ca0dfe0-8c3b-4ee8-b6e4-dc60e194fb65', name: '1ª VARA DO TRABALHO DE ITABAIANA/SE', document: null, juntoId: 57470, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a9a3bd92-b6a2-4271-b8cb-c0ef5a2ab2b8', name: '1ª VARA DO TRABALHO DE ITABERABA/BA', document: null, juntoId: 56736, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4c571380-fe76-42cd-bd87-26622eab5cd3', name: '1ª VARA DO TRABALHO DE ITABIRA/MG', document: null, juntoId: 56454, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2f085c43-4910-44b9-b2e5-9651b82802c2', name: '1ª VARA DO TRABALHO DE ITABORAÍ/RJ', document: null, juntoId: 56128, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f66cfa28-a7bd-4187-9ca1-cdb74ed8d05a', name: '1ª VARA DO TRABALHO DE ITACOATIARA/AM', document: null, juntoId: 57107, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '45e772c6-79be-42ef-bde3-79d3235d3068', name: '1ª VARA DO TRABALHO DE ITAITUBA/PA', document: null, juntoId: 56914, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '51078ce0-2eb6-4d70-99a4-312be8f3d13d', name: '1ª VARA DO TRABALHO DE ITAJUBÁ/MG', document: null, juntoId: 56455, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c473ae8e-1d91-4327-adbd-080c1cf838bc', name: '1ª VARA DO TRABALHO DE ITAMARAJU/BA', document: null, juntoId: 56737, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '04deb8e1-9dd0-44cf-8401-d58b22b12944', name: '1ª VARA DO TRABALHO DE ITANHAÉM/SP', document: null, juntoId: 57350, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '845e7b25-b128-4270-a9be-fb65fd4b4fb1', name: '1ª VARA DO TRABALHO DE ITAPECERICA DA SERRA /SP', document: null, juntoId: 56288, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7d432f87-0136-4bba-aaa5-bdefca08c47e', name: '1ª VARA DO TRABALHO DE ITAPERUNA/RJ', document: null, juntoId: 56130, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '876cd1f9-9060-41be-a931-80353297d7d6', name: '1ª VARA DO TRABALHO DE ITAPETINGA/BA', document: null, juntoId: 56738, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5d733ccc-8e17-4b78-b873-3f94cfd8e215', name: '1ª VARA DO TRABALHO DE ITAPETININGA/SP', document: null, juntoId: 57351, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a206c28d-61cf-43ad-8614-a383918af76a', name: '1ª VARA DO TRABALHO DE ITAPEVA/SP', document: null, juntoId: 57352, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd4abd112-b1d2-4675-a4a4-27acb5a484c5', name: '1ª VARA DO TRABALHO DE ITAPEVI /SP', document: null, juntoId: 56289, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e35f21d0-98ae-46b9-912f-b19b06600656', name: '1ª VARA DO TRABALHO DE ITAPIRA/SP', document: null, juntoId: 57353, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b41ecca2-87a3-4f96-a3f5-8f11a6d1205b', name: '1ª VARA DO TRABALHO DE ITÁPOLIS/SP', document: null, juntoId: 57354, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '54732c50-8db8-4078-9271-332cbce1f6e3', name: '1ª VARA DO TRABALHO DE ITAPORANGA/PB', document: null, juntoId: 57191, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4376d331-240d-4ccb-ac52-265226a8901f', name: '1ª VARA DO TRABALHO DE ITARARÉ/SP', document: null, juntoId: 57355, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '06d199d4-3549-4292-8790-22155e4a252b', name: '1ª VARA DO TRABALHO DE ITATIBA/SP', document: null, juntoId: 57356, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4c54a9a5-2371-4e76-9f85-1655395a3146', name: '1ª VARA DO TRABALHO DE ITAÚNA/MG', document: null, juntoId: 56456, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7bd48690-e3ef-46d3-8630-a9ab6ea308f4', name: '1ª VARA DO TRABALHO DE ITU/SP', document: null, juntoId: 57357, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7d7297bd-bad0-4a2a-8eb8-333b1875ebeb', name: '1ª VARA DO TRABALHO DE ITUIUTABA/MG', document: null, juntoId: 56457, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f3aecc08-b6fe-499d-8776-2871fd816e17', name: '1ª VARA DO TRABALHO DE ITUMBIARA/GO', document: null, juntoId: 57418, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0907e2fe-e691-4f20-b510-a6fbb0f1d9dc', name: '1ª VARA DO TRABALHO DE ITURAMA/MG', document: null, juntoId: 56458, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '25b7d14c-2756-434c-979e-4d098f48aa11', name: '1ª VARA DO TRABALHO DE ITUVERAVA/SP', document: null, juntoId: 57358, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4f4c476b-26ba-462c-93b9-8884b7171a01', name: '1ª VARA DO TRABALHO DE IVAIPORÃ/PR', document: null, juntoId: 56986, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b5b974ed-dce1-444d-b927-34e04a42bd2c', name: '1ª VARA DO TRABALHO DE JABOATÃO DOS GUARARAPES/PE', document: null, juntoId: 56817, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '45cc3954-fb7d-4c5f-9f55-1b83e9ce2a39', name: '1ª VARA DO TRABALHO DE JABOTICABAL/SP', document: null, juntoId: 57256, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b7d9d0fd-6329-4d1c-bb9f-dfd42b1ca669', name: '1ª VARA DO TRABALHO DE JACAREÍ/SP', document: null, juntoId: 57257, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ace3730b-331f-46de-acf2-a9d336c1079b', name: '1ª VARA DO TRABALHO DE JACAREZINHO/PR', document: null, juntoId: 56987, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '47aa33b2-5326-4681-9985-2041e94032df', name: '1ª VARA DO TRABALHO DE JACIARA/MT', document: null, juntoId: 57529, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '738e2dc5-08bd-4392-8cbe-1ccb5bab1065', name: '1ª VARA DO TRABALHO DE JACOBINA/BA', document: null, juntoId: 56739, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1900e803-1916-4f3f-84e6-ad330d697924', name: '1ª VARA DO TRABALHO DE JAGUARIAÍVA/PR', document: null, juntoId: 56988, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '91bba379-056a-4ef2-ab52-2bea94b3bd69', name: '1ª VARA DO TRABALHO DE JALES/SP', document: null, juntoId: 57359, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '535ebc44-2799-41e3-a913-f1b278434f7f', name: '1ª VARA DO TRABALHO DE JANDIRA /SP', document: null, juntoId: 56291, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3cc3bbf7-6484-4b5d-8484-77f898805d1c', name: '1ª VARA DO TRABALHO DE JANUÁRIA/MG', document: null, juntoId: 56459, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '26ebc94a-c65c-41cc-a3ea-bbf49fcb1ded', name: '1ª VARA DO TRABALHO DE JARDIM/MS', document: null, juntoId: 57568, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '18f51139-182d-40ef-881c-8d76d8fd0ee8', name: '1ª VARA DO TRABALHO DE JARU/RO', document: null, juntoId: 57236, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5fb69c39-0c6c-48c9-b80c-cb1fc0c7581c', name: '1ª VARA DO TRABALHO DE JATAÍ/GO', document: null, juntoId: 57419, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '204be714-828b-4a48-a8ad-3ebde331e6d2', name: '1ª VARA DO TRABALHO DE JAÚ/SP', document: null, juntoId: 57258, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'acfeb7c2-fe58-4f0e-8128-6a5dd8a75876', name: '1ª VARA DO TRABALHO DE JEQUIÉ/BA', document: null, juntoId: 56740, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '26f41192-546d-4fad-9cba-30c5c524c532', name: '1ª VARA DO TRABALHO DE JI-PARANÁ/RO', document: null, juntoId: 57213, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6709bbb3-59f1-4be8-8cfd-de1044e968b3', name: '1ª VARA DO TRABALHO DE JOÃO MONLEVADE/MG', document: null, juntoId: 56460, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0d14c950-c416-4e05-87d5-4d8d83fa755c', name: '1ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57192, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '63d01a43-fa45-4c50-8aae-33c8e6cfb8dd', name: '1ª VARA DO TRABALHO DE JOSÉ BONIFÁCIO/SP', document: null, juntoId: 57360, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4231a410-1842-4f8c-a262-be4d18ba664e', name: '1ª VARA DO TRABALHO DE JUARA/MT', document: null, juntoId: 57530, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '55ffbaa6-af8d-49c9-b751-4cc0f026c36d', name: '1ª VARA DO TRABALHO DE JUAZEIRO/BA', document: null, juntoId: 56741, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '49829b81-eaf3-4990-bd1a-c9d7df5b479a', name: '1ª VARA DO TRABALHO DE JUÍNA/MT', document: null, juntoId: 57531, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd9e9c045-82f1-433f-bdac-502073159d51', name: '1ª VARA DO TRABALHO DE JUIZ DE FORA/MG', document: null, juntoId: 56461, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '440b43d8-6533-413a-a87b-4d737b5029d7', name: '1ª VARA DO TRABALHO DE JUNDIAÍ/SP', document: null, juntoId: 57259, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e6d5b64e-21d6-4559-a59f-a675b5b84f99', name: '1ª VARA DO TRABALHO DE LÁBREA/AM', document: null, juntoId: 57108, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2b07602f-9a70-4042-86a5-70a66d6d75b7', name: '1ª VARA DO TRABALHO DE LAGARTO/SE', document: null, juntoId: 57471, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '63162bda-55a7-42f3-b115-a7054903443b', name: '1ª VARA DO TRABALHO DE LAGOA VERMELHA/RS', document: null, juntoId: 56613, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c6f4c4af-5c14-406c-b310-077e3321f7a1', name: '1ª VARA DO TRABALHO DE LAJEADO/RS', document: null, juntoId: 56614, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '82fa5c2b-16e6-4ee7-a4be-4cb4761a41cc', name: '1ª VARA DO TRABALHO DE LARANJAL DO JARI - MONTE DOURADO/AP', document: null, juntoId: 56915, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ed4f9657-31a0-4e99-bcda-07008711fd9f', name: '1ª VARA DO TRABALHO DE LARANJEIRAS DO SUL/PR', document: null, juntoId: 56989, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '07a1cab3-e7fb-4882-90b0-f705a9ccece0', name: '1ª VARA DO TRABALHO DE LAVRAS/MG', document: null, juntoId: 56462, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd3031ed-078c-4659-a104-367ab772bbb2', name: '1ª VARA DO TRABALHO DE LEME/SP', document: null, juntoId: 57361, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e401f19-92df-493b-bbbc-a6ed068877a3', name: '1ª VARA DO TRABALHO DE LENÇÓIS PAULISTA/SP', document: null, juntoId: 57260, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ffbe0821-1516-4f10-b8fb-dbac3b695f4a', name: '1ª VARA DO TRABALHO DE LIMEIRA/SP', document: null, juntoId: 57261, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9cff3c63-c169-4f0f-80bd-8b232c9db24b', name: '1ª VARA DO TRABALHO DE LIMOEIRO DO NORTE/CE', document: null, juntoId: 56880, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '351fb1fe-7205-4734-ad0b-7b6951a18db7', name: '1ª VARA DO TRABALHO DE LIMOEIRO/PE', document: null, juntoId: 56818, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '31ffb047-71d3-4457-87b0-347a4ca6b193', name: '1ª VARA DO TRABALHO DE LINHARES/ES', document: null, juntoId: 57590, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4521223f-27cf-4ab3-8ce9-a845c2369c90', name: '1ª VARA DO TRABALHO DE LINS/SP', document: null, juntoId: 57362, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1355d52e-d00d-44e7-b6c4-ec79e49a72b2', name: '1ª VARA DO TRABALHO DE LOANDA/PR', document: null, juntoId: 56990, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3e3d8ffe-3e67-4d6e-bfe2-4688431f22dd', name: '1ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 56991, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9507eb59-2855-4c15-8288-34b2cd68e750', name: '1ª VARA DO TRABALHO DE LORENA/SP', document: null, juntoId: 57363, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3dd3ea27-0732-423f-a9e9-a59c21570ba5', name: '1ª VARA DO TRABALHO DE LUCAS DO RIO VERDE/MT', document: null, juntoId: 57532, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ec0a419b-ce03-48a9-8b43-133fcc67e164', name: '1ª VARA DO TRABALHO DE LUZIÂNIA/GO', document: null, juntoId: 57420, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '05b69383-8834-4e7a-a9e5-31ae96d97df4', name: '1ª VARA DO TRABALHO DE MACAÉ/RJ', document: null, juntoId: 56131, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '81814742-f088-4e00-b032-fa297fc9ef73', name: '1ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56916, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '04a1938b-e172-47e6-9002-8374f068b999', name: '1ª VARA DO TRABALHO DE MACAU/RN', document: null, juntoId: 57490, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5ada5377-9bbb-4180-969e-3c038aad086a', name: '1ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57450, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f6e4cd1d-abb2-4557-8d61-a55727e3cedb', name: "1ª VARA DO TRABALHO DE MACHADINHO D'OESTE/RO", document: null, juntoId: 57237, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd5e1f1eb-6605-4b73-a0d9-f0770feeec55', name: '1ª VARA DO TRABALHO DE MAGÉ/RJ', document: null, juntoId: 56132, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c76d2892-1868-4e5f-8e8c-abd6f321ad29', name: '1ª VARA DO TRABALHO DE MAMANGUAPE/PB', document: null, juntoId: 57193, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6d1dae18-af02-49e8-9289-6405afa0158b', name: '1ª VARA DO TRABALHO DE MANACAPURU/AM', document: null, juntoId: 57109, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '00a069f4-7d43-45d4-a52c-7454e0aa7531', name: '1ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57110, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0f089b8d-4656-413c-b9ae-a8caf806be62', name: '1ª VARA DO TRABALHO DE MANHUAÇU/MG', document: null, juntoId: 56463, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f2ab4016-e07f-4d84-a649-10efee2852ce', name: '1ª VARA DO TRABALHO DE MARABÁ/PA', document: null, juntoId: 56917, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7a07bbe1-3c52-42df-bc21-d8a0b3ee22b5', name: '1ª VARA DO TRABALHO DE MARACANAÚ/CE', document: null, juntoId: 56881, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1810b384-669b-4d69-b8f4-337b88950d54', name: '1ª VARA DO TRABALHO DE MARECHAL CÂNDIDO RONDON/PR', document: null, juntoId: 56992, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1d075974-c8a0-4880-aa5d-e505f2848e8c', name: '1ª VARA DO TRABALHO DE MARICÁ/RJ', document: null, juntoId: 56133, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0100e64a-8b94-453e-b91d-bcfed6292683', name: '1ª VARA DO TRABALHO DE MARÍLIA/SP', document: null, juntoId: 57262, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '30e27cc0-c37c-4c19-93ba-11d128e4fda9', name: '1ª VARA DO TRABALHO DE MARINGÁ/PR', document: null, juntoId: 56993, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '46d8a185-0b21-4d78-94e2-489591405a00', name: '1ª VARA DO TRABALHO DE MARUIM/SE', document: null, juntoId: 57472, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8381597a-5273-4f0f-8d22-83877fb1c0e9', name: '1ª VARA DO TRABALHO DE MATÃO/SP', document: null, juntoId: 57364, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '311d7cfa-7b78-40a2-9ecd-081494c974d2', name: '1ª VARA DO TRABALHO DE MAUÁ /SP', document: null, juntoId: 56292, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7b6bd7b2-c286-47b3-b294-60a6338e7be1', name: '1ª VARA DO TRABALHO DE MINEIROS/GO', document: null, juntoId: 57421, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f17a0df7-b327-4637-b9eb-4da78d04902b', name: "1ª VARA DO TRABALHO DE MIRASSOL D'OESTE/MT", document: null, juntoId: 57533, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '435d3e2f-890c-41b0-aa87-d89a913beac8', name: '1ª VARA DO TRABALHO DE MOCOCA/SP', document: null, juntoId: 57365, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '726f6293-9652-4705-905a-7f303afed0fb', name: '1ª VARA DO TRABALHO DE MOGI DAS CRUZES /SP', document: null, juntoId: 56293, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '40865014-9bee-4e86-8c33-408eecb2202f', name: '1ª VARA DO TRABALHO DE MOGI GUAÇU/SP', document: null, juntoId: 57366, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '82aaa9bf-5974-4d84-b217-87ba42206cb6', name: '1ª VARA DO TRABALHO DE MOGI-MIRIM/SP', document: null, juntoId: 57367, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1744211c-d1bc-4e39-a89e-3c5a0c69596a', name: '1ª VARA DO TRABALHO DE MONTE AZUL/MG', document: null, juntoId: 56464, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0b11d912-1b0b-4c7b-92e9-f2b271701a2e', name: '1ª VARA DO TRABALHO DE MONTEIRO/PB', document: null, juntoId: 57194, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8ae2d68b-74d5-446e-b011-eb830052eb32', name: '1ª VARA DO TRABALHO DE MONTENEGRO/RS', document: null, juntoId: 56615, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b3174833-418f-4571-ab3a-cd676bbf224b', name: '1ª VARA DO TRABALHO DE MONTES CLAROS/MG', document: null, juntoId: 56465, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1c7eac94-03a9-49cb-bf1b-24ab4979fb05', name: '1ª VARA DO TRABALHO DE MOSSORÓ/RN', document: null, juntoId: 57491, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'de8bd0fb-cf70-4b82-86ed-0e17332b8dba', name: '1ª VARA DO TRABALHO DE MUNDO NOVO/MS', document: null, juntoId: 57569, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bb62b4fb-5042-4adc-a8cf-99cd2b089abb', name: '1ª VARA DO TRABALHO DE MURIAÉ/MG', document: null, juntoId: 56466, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd617dec0-f4dc-4a18-85d5-29bad868641e', name: '1ª VARA DO TRABALHO DE NANUQUE/MG', document: null, juntoId: 56467, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9020f9c7-9133-4852-99da-6fdc0e59b486', name: '1ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57492, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '706701a1-d04f-4552-b2b8-11fda47cb72b', name: '1ª VARA DO TRABALHO DE NAVIRAÍ/MS', document: null, juntoId: 57570, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'de25b486-906f-45e4-a2ca-24c44e017745', name: '1ª VARA DO TRABALHO DE NAZARÉ DA MATA/PE', document: null, juntoId: 56819, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9ac5dadc-2116-4e62-8db6-8c3d69543e08', name: '1ª VARA DO TRABALHO DE NILÓPOLIS/RJ', document: null, juntoId: 56134, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e983791b-1908-4a54-a83e-f0307838deaa', name: '1ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56135, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f0b92f39-e9fb-41fa-8a14-31ae728c6a90', name: '1ª VARA DO TRABALHO DE NOSSA SENHORA DA GLÓRIA/SE', document: null, juntoId: 57473, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b7779e26-b75d-4f1f-a0b9-a74b0804a140', name: '1ª VARA DO TRABALHO DE NOVA ANDRADINA/MS', document: null, juntoId: 57571, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b2b65650-ba3d-42bd-8d15-e9879a434526', name: '1ª VARA DO TRABALHO DE NOVA ESPERANÇA/PR', document: null, juntoId: 56994, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3116400a-f5a4-49bb-a45c-ab7c77aad73f', name: '1ª VARA DO TRABALHO DE NOVA FRIBURGO/RJ', document: null, juntoId: 56136, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '522a2274-01dd-41cc-9d06-9dd9853c8bbc', name: '1ª VARA DO TRABALHO DE NOVA IGUAÇU/RJ', document: null, juntoId: 56137, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5e338e4a-0824-4194-bdc2-80d94c03f676', name: '1ª VARA DO TRABALHO DE NOVA LIMA/MG', document: null, juntoId: 56468, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ef2c0017-2b49-4dce-a797-b92afff3d3d1', name: '1ª VARA DO TRABALHO DE NOVA MUTUM/MT', document: null, juntoId: 57557, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '26d66ee0-711e-4a28-9023-350bc1122a40', name: '1ª VARA DO TRABALHO DE NOVA VENÉCIA/ES', document: null, juntoId: 57591, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'db5ba511-1c13-4abc-93b8-9a640f14397c', name: '1ª VARA DO TRABALHO DE NOVO HAMBURGO/RS', document: null, juntoId: 56616, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1daae09f-2c26-4545-adf5-72cca617b7fe', name: '1ª VARA DO TRABALHO DE ÓBIDOS/PA', document: null, juntoId: 56918, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0c9534f6-9cc6-4965-a176-1b40454e4440', name: '1ª VARA DO TRABALHO DE OEIRAS/PI', document: null, juntoId: 57509, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e3907e3c-1dda-497e-b73a-afe02487eb36', name: '1ª VARA DO TRABALHO DE OLÍMPIA/SP', document: null, juntoId: 57368, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dc3912fb-5253-4413-8dd5-b52147d363ad', name: '1ª VARA DO TRABALHO DE OLINDA/PE', document: null, juntoId: 56820, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dbeea9b3-bfef-41ca-928b-e3c984b2ca61', name: '1ª VARA DO TRABALHO DE ORLÂNDIA/SP', document: null, juntoId: 57369, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '656bb645-51b9-4a3f-a071-b464f659b9d7', name: '1ª VARA DO TRABALHO DE OSASCO /SP', document: null, juntoId: 56294, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '096867bb-3628-4dd3-8aff-d14875e487bf', name: '1ª VARA DO TRABALHO DE OSÓRIO/RS', document: null, juntoId: 56617, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '81a9d169-d3af-4c94-ae79-10b050ae71df', name: '1ª VARA DO TRABALHO DE OURINHOS/SP', document: null, juntoId: 57370, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c26db0ca-4625-46d1-9850-782acb886fd0', name: "1ª VARA DO TRABALHO DE OURO PRETO D'OESTE/RO", document: null, juntoId: 57238, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9620990b-a6c8-4f78-89b1-8b853c482c3e', name: '1ª VARA DO TRABALHO DE OURO PRETO/MG', document: null, juntoId: 56469, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '62d1e698-b02e-44e8-80b4-c417dd73c8ff', name: '1ª VARA DO TRABALHO DE PACAJUS/CE', document: null, juntoId: 56882, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '19dff779-4792-4962-9ed5-12dc313cd7d7', name: '1ª VARA DO TRABALHO DE PALMARES/PE', document: null, juntoId: 56821, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8ca40fb8-a3cf-4d37-a0d6-bf81210a090c', name: '1ª VARA DO TRABALHO DE PALMAS/PR', document: null, juntoId: 56995, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f90676b4-97f5-42b9-8232-c8fd2f4029eb', name: '1ª VARA DO TRABALHO DE PALMAS/TO', document: null, juntoId: 57073, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '78feea59-f65c-418d-aa12-4eb29fc448aa', name: '1ª VARA DO TRABALHO DE PALMEIRA DAS MISSÕES/RS', document: null, juntoId: 56618, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '83de5179-3126-4020-9c6e-850279b6f1af', name: '1ª VARA DO TRABALHO DE PALMEIRA DOS ÍNDIOS/AL', document: null, juntoId: 57451, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '560d8134-0fd6-41cf-8d8a-ddbca3d4ea23', name: '1ª VARA DO TRABALHO DE PARÁ DE MINAS/MG', document: null, juntoId: 56470, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f607a6d3-0d94-4dda-a7bd-320efb37df63', name: '1ª VARA DO TRABALHO DE PARACATU/MG', document: null, juntoId: 56471, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bcc5a48b-9b1d-4564-ae4d-e1baa1b141c5', name: '1ª VARA DO TRABALHO DE PARAGOMINAS/PA', document: null, juntoId: 56919, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '770fd6f0-cfa3-4c17-9528-6f22905ad171', name: '1ª VARA DO TRABALHO DE PARANAGUÁ/PR', document: null, juntoId: 56996, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1f2175b4-6ecb-48c4-9272-61a640343137', name: '1ª VARA DO TRABALHO DE PARANAÍBA/MS', document: null, juntoId: 57572, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ffe17458-281c-47e7-8816-ca5dc669d707', name: '1ª VARA DO TRABALHO DE PARANAVAÍ/PR', document: null, juntoId: 56997, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9d6db46b-5fb7-458a-9c44-fe948c7ba604', name: '1ª VARA DO TRABALHO DE PARAUAPEBAS/PA', document: null, juntoId: 56920, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f8031227-79fd-496c-8398-cb38761cf332', name: '1ª VARA DO TRABALHO DE PARINTINS/AM', document: null, juntoId: 57111, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '23c6de67-e522-45ee-ad82-0347d1506bc0', name: '1ª VARA DO TRABALHO DE PARNAÍBA/PI', document: null, juntoId: 57510, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a031429c-cd58-41a1-985e-adbfaad10e1f', name: '1ª VARA DO TRABALHO DE PASSO FUNDO/RS', document: null, juntoId: 56619, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f076df50-9ba5-49b3-bf5e-682173cdce1d', name: '1ª VARA DO TRABALHO DE PASSOS/MG', document: null, juntoId: 56472, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6b7f2026-3a5b-4a41-867e-d24ef4337634', name: '1ª VARA DO TRABALHO DE PATO BRANCO/PR', document: null, juntoId: 56998, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '72642e93-6511-45ca-a9d2-3f93b980bf1f', name: '1ª VARA DO TRABALHO DE PATOS DE MINAS/MG', document: null, juntoId: 56473, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '66a00503-3ebd-4194-b4ac-4915c9dde032', name: '1ª VARA DO TRABALHO DE PATOS/PB', document: null, juntoId: 57195, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b332eaa3-c500-4701-811c-2088e1549b07', name: '1ª VARA DO TRABALHO DE PATROCÍNIO/MG', document: null, juntoId: 56474, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fce903bc-7760-406f-b331-390245287e24', name: '1ª VARA DO TRABALHO DE PAU DOS FERROS/RN', document: null, juntoId: 57493, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3ccd0f13-6b0a-4d52-9767-70e56474c2b6', name: '1ª VARA DO TRABALHO DE PAULÍNIA/SP', document: null, juntoId: 57263, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6b682f1a-9b25-4b29-9454-df0411a710ed', name: '1ª VARA DO TRABALHO DE PAULISTA/PE', document: null, juntoId: 56822, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '68bde540-dfd3-4567-84d9-2df836f47d78', name: '1ª VARA DO TRABALHO DE PAULO AFONSO/BA', document: null, juntoId: 56742, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4bf23266-7931-47a4-849b-64e5a39fa1b1', name: '1ª VARA DO TRABALHO DE PEDREIRAS/MA', document: null, juntoId: 57623, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2c7bf7a2-15a8-4f03-b5f3-d6e6c3b4752a', name: '1ª VARA DO TRABALHO DE PEDRO LEOPOLDO/MG', document: null, juntoId: 56475, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4b77f4d8-e665-4bee-8c2d-fd217b8f24bb', name: '1ª VARA DO TRABALHO DE PEIXOTO DE AZEVEDO/MT', document: null, juntoId: 57558, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3bbfb3fb-2ba7-462d-a55e-4645c7df574e', name: '1ª VARA DO TRABALHO DE PELOTAS/RS', document: null, juntoId: 56620, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '14649674-049e-4cae-aabc-4e1bfb3ee628', name: '1ª VARA DO TRABALHO DE PENÁPOLIS/SP', document: null, juntoId: 57372, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '23450945-2845-4108-9cf1-938e552fba1e', name: '1ª VARA DO TRABALHO DE PENEDO/AL', document: null, juntoId: 57452, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '37dbc501-43d2-4073-968a-80d62edeb1da', name: '1ª VARA DO TRABALHO DE PESQUEIRA/PE', document: null, juntoId: 56823, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'db298593-93a7-44e4-bbbf-605055a02205', name: '1ª VARA DO TRABALHO DE PETROLINA/PE', document: null, juntoId: 56824, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8adf7d90-be6f-4efe-b0db-5ed6c82b48ab', name: '1ª VARA DO TRABALHO DE PETRÓPOLIS/RJ', document: null, juntoId: 56138, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fef3d917-09cd-4bf7-92bf-9a154d0ed90e', name: '1ª VARA DO TRABALHO DE PICOS/PI', document: null, juntoId: 57511, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dbe33c1d-aefc-47b0-9963-dbd3ac8ae155', name: '1ª VARA DO TRABALHO DE PICUÍ/PB', document: null, juntoId: 57196, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bf7e85f7-af57-4def-82e4-26b3ca9a28c7', name: '1ª VARA DO TRABALHO DE PIEDADE/SP', document: null, juntoId: 57373, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e53da83-c90e-4886-9e46-190df1286e60', name: '1ª VARA DO TRABALHO DE PIMENTA BUENO/RO', document: null, juntoId: 57239, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ce79fb3b-6171-4b05-81df-0f56f67a1bd4', name: '1ª VARA DO TRABALHO DE PINDAMONHANGABA/SP', document: null, juntoId: 57374, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd826cdc-9ba3-4073-a0b8-6675483d2659', name: '1ª VARA DO TRABALHO DE PINHAIS/PR', document: null, juntoId: 57000, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '70a60f03-d8b5-4fbb-a743-28ce0c9a3286', name: '1ª VARA DO TRABALHO DE PINHEIRO/MA', document: null, juntoId: 57624, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '985adf0f-3a62-4adb-82bd-b5b9f18def0f', name: '1ª VARA DO TRABALHO DE PIRACICABA/SP', document: null, juntoId: 57264, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9fdfe84b-bbaf-48c9-92cd-9ee732002f1b', name: '1ª VARA DO TRABALHO DE PIRAPORA/MG', document: null, juntoId: 56476, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd7c972a-d1d6-44fb-bcc0-184a837a5ff7', name: '1ª VARA DO TRABALHO DE PIRASSUNUNGA/SP', document: null, juntoId: 57375, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '922a28c7-1fc6-4962-b4f1-358c2ab92e5c', name: '1ª VARA DO TRABALHO DE PIRES DO RIO/GO', document: null, juntoId: 57422, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7f4a1bd2-768f-4da6-9748-9162b60e03de', name: '1ª VARA DO TRABALHO DE PIRIPIRI/PI', document: null, juntoId: 57512, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a586359e-d4fa-4f60-b31c-a1ceed73f9a0', name: '1ª VARA DO TRABALHO DE PLACIDO DE CASTRO/AC', document: null, juntoId: 57240, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd49c1260-7f5c-42f2-b4bd-3fcd1af3945e', name: '1ª VARA DO TRABALHO DE POÁ /SP', document: null, juntoId: 56295, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7149586d-118d-4a80-9dbd-4c4a9e261601', name: '1ª VARA DO TRABALHO DE POÇOS DE CALDAS/MG', document: null, juntoId: 56477, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ef54f1e5-45cf-4b1d-93a9-6ec127874e44', name: '1ª VARA DO TRABALHO DE PONTA GROSSA/PR', document: null, juntoId: 57001, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ea82acf5-2f8b-4b03-8f93-4f16ec190afb', name: '1ª VARA DO TRABALHO DE PONTA PORÃ/MS', document: null, juntoId: 57573, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'efef42df-8672-426e-86a7-2595e4813544', name: '1ª VARA DO TRABALHO DE PONTE NOVA/MG', document: null, juntoId: 56478, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'caafbcf0-1737-43fc-b5bf-c9a51683d8e3', name: '1ª VARA DO TRABALHO DE PONTES E LACERDA/MT', document: null, juntoId: 57534, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '73417556-b96f-42b8-b81d-0ccc43c31a6a', name: '1ª VARA DO TRABALHO DE PORECATU/PR', document: null, juntoId: 57002, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd6b9f9e2-40c0-4cfc-9f0f-18b7d668cbe2', name: '1ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56621, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '644106e9-edcf-45b4-b57f-564e6f5a56ea', name: '1ª VARA DO TRABALHO DE PORTO CALVO/AL', document: null, juntoId: 57453, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f8bf0bae-596e-458f-8b74-542b843f3873', name: '1ª VARA DO TRABALHO DE PORTO FERREIRA/SP', document: null, juntoId: 57376, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5ef0b142-02b0-4d1b-ac67-920552ec8d8d', name: '1ª VARA DO TRABALHO DE PORTO SEGURO/BA', document: null, juntoId: 56743, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7d987ad9-dfd7-4d27-8bd6-4ae7ba133286', name: '1ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57214, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f1e08c72-91dc-4143-a186-c5f63262d1ff', name: '1ª VARA DO TRABALHO DE POSSE/GO', document: null, juntoId: 57423, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ce7e1def-c64e-46b4-a2b3-0cfa7f5f6e85', name: '1ª VARA DO TRABALHO DE POUSO ALEGRE/MG', document: null, juntoId: 56479, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '552a783b-5dfb-4032-ba7a-7499196dab66', name: '1ª VARA DO TRABALHO DE PRAIA GRANDE /SP', document: null, juntoId: 56296, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '111a1de1-220b-446d-b644-79c5864768fa', name: '1ª VARA DO TRABALHO DE PRESIDENTE DUTRA/MA', document: null, juntoId: 57625, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ce22dafc-e9fa-407b-ae31-827137f7932f', name: '1ª VARA DO TRABALHO DE PRESIDENTE FIGUEIREDO/AM', document: null, juntoId: 57112, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5f6c96e6-cd9e-40ba-a53e-cd00d457da11', name: '1ª VARA DO TRABALHO DE PRESIDENTE MÉDICI (TRANSFERIDA PARA JI-PARANA)/RO', document: null, juntoId: 57215, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'be98b636-1479-4f45-8eb9-c91f582fa9a9', name: '1ª VARA DO TRABALHO DE PRESIDENTE PRUDENTE/SP', document: null, juntoId: 57265, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5b8163bc-55f7-4632-a7fb-0fa7f9162f85', name: '1ª VARA DO TRABALHO DE PRESIDENTE VENCESLAU/SP', document: null, juntoId: 57377, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f26cebb6-4b45-4cf8-b593-ec9276052a1d', name: '1ª VARA DO TRABALHO DE PRIMAVERA DO LESTE/MT', document: null, juntoId: 57535, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'febf812b-a101-4592-bc4a-c14c54028220', name: '1ª VARA DO TRABALHO DE PROPRIÁ/SE', document: null, juntoId: 57474, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '43432fe3-6bc5-43e5-8bb4-046c68f777c3', name: '1ª VARA DO TRABALHO DE QUEIMADOS/RJ', document: null, juntoId: 56139, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2ac3af96-ea22-4870-b3f5-1b2f75905c17', name: '1ª VARA DO TRABALHO DE QUIRINÓPOLIS/GO', document: null, juntoId: 57424, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dc9e6f2f-6f8a-44e0-8840-8744ba9c75ed', name: '1ª VARA DO TRABALHO DE QUIXADÁ/CE', document: null, juntoId: 56883, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '06205072-285d-41ce-b5a8-aee2ea23d492', name: '1ª VARA DO TRABALHO DE RANCHARIA/SP', document: null, juntoId: 57378, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'edda1c33-899a-43c6-a08f-e656d9542cf5', name: '1ª VARA DO TRABALHO DE REDENÇÃO/PA', document: null, juntoId: 56921, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a4415daa-6288-4601-9c72-e4035474cafd', name: '1ª VARA DO TRABALHO DE REGISTRO/SP', document: null, juntoId: 57379, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'db031abd-f8fa-49e5-975e-592ef3e101dd', name: '1ª VARA DO TRABALHO DE RESENDE/RJ', document: null, juntoId: 56140, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4f49028a-2232-4386-9956-1342b789c21c', name: '1ª VARA DO TRABALHO DE RIBEIRÃO DAS NEVES/MG', document: null, juntoId: 56480, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0239a503-df10-4c8e-9387-89fe6d60836a', name: '1ª VARA DO TRABALHO DE RIBEIRÃO PIRES /SP', document: null, juntoId: 56297, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5a70180e-1c22-4599-afe0-7e2511234bfd', name: '1ª VARA DO TRABALHO DE RIBEIRÃO PRETO/SP', document: null, juntoId: 57266, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '49870dc5-5791-40bb-8f4f-ceac9cbb0e9d', name: '1ª VARA DO TRABALHO DE RIBEIRÃO/PE', document: null, juntoId: 56825, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dbd1522d-75d3-41da-9dd7-c25b6bb8d9d5', name: '1ª VARA DO TRABALHO DE RIO BONITO/RJ', document: null, juntoId: 56141, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '79dc44b4-3150-492f-b6a5-404ea24e519e', name: '1ª VARA DO TRABALHO DE RIO BRANCO/AC', document: null, juntoId: 57216, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b6286cdd-2751-4b65-814d-7c9609a0d991', name: '1ª VARA DO TRABALHO DE RIO BRILHANTE/MS', document: null, juntoId: 57574, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '850654b5-ad04-41ef-8d55-d3954cf495b5', name: '1ª VARA DO TRABALHO DE RIO CLARO/SP', document: null, juntoId: 57380, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5970c0e7-81c0-42b7-91e1-0cd2ad7202f2', name: '1ª VARA DO TRABALHO DE RIO GRANDE/RS', document: null, juntoId: 56622, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a7d31c62-86b7-4eec-8946-1988fe26469b', name: '1ª VARA DO TRABALHO DE RIO VERDE/GO', document: null, juntoId: 57425, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e1c67e8f-c1c1-494c-acbf-16c1db8d3f6a', name: '1ª VARA DO TRABALHO DE ROLÂNDIA/PR', document: null, juntoId: 57003, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8c6c48d0-dcb8-4f89-8e6a-2a76f673f059', name: '1ª VARA DO TRABALHO DE ROLIM DE MOURA/RO', document: null, juntoId: 57241, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '93999860-b277-40df-99c4-de8058e1ed8c', name: '1ª VARA DO TRABALHO DE RONDONÓPOLIS/MT', document: null, juntoId: 57536, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f6f60eb3-4d67-4473-9d4f-256f8162a799', name: '1ª VARA DO TRABALHO DE ROSÁRIO DO SUL/RS', document: null, juntoId: 56623, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6699e27c-837a-43fa-ae21-1024c56717a1', name: '1ª VARA DO TRABALHO DE SABARÁ/MG', document: null, juntoId: 56481, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '633002ce-305a-44f1-9d0d-8561b76d4ce0', name: '1ª VARA DO TRABALHO DE SALGUEIRO/PE', document: null, juntoId: 56826, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '30b107dc-01d7-4420-aa62-fb92c86e018f', name: '1ª VARA DO TRABALHO DE SALTO/SP', document: null, juntoId: 57381, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd646e9fb-8f50-4bfb-9309-85f7d73636b5', name: '1ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56744, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2c8c7aa3-78d2-4db1-9a6e-58b0727c7e1d', name: "1ª VARA DO TRABALHO DE SANTA BÁRBARA D'OESTE/SP", document: null, juntoId: 57382, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2f7e6c5d-6d1b-448e-a717-ee4eee22c27b', name: '1ª VARA DO TRABALHO DE SANTA CRUZ DO RIO PARDO/SP', document: null, juntoId: 57383, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e330dad-4e16-43da-9579-60252ee1ea55', name: '1ª VARA DO TRABALHO DE SANTA CRUZ DO SUL/RS', document: null, juntoId: 56624, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2551dd07-21fd-4dbb-b808-95a5e8cce20f', name: '1ª VARA DO TRABALHO DE SANTA INÊS/MA', document: null, juntoId: 57627, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'db49e5b2-7943-41bd-b76e-ac0d801ee277', name: '1ª VARA DO TRABALHO DE SANTA IZABEL DO PARÁ/PA', document: null, juntoId: 56922, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6cc3c8a6-d61b-488c-9f01-8c600a0f96d4', name: '1ª VARA DO TRABALHO DE SANTA LUZIA/MG', document: null, juntoId: 56482, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bec4e219-772c-4542-984c-35b96fb12f2d', name: '1ª VARA DO TRABALHO DE SANTA MARIA/RS', document: null, juntoId: 56625, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5e9239c5-9f4f-44dd-bd2f-36d1f166f1c8', name: '1ª VARA DO TRABALHO DE SANTA RITA DO SAPUCAÍ/MG', document: null, juntoId: 56483, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fa3a89d3-2c27-4b64-ab24-d62e510c3c65', name: '1ª VARA DO TRABALHO DE SANTA RITA/PB', document: null, juntoId: 57197, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '35d900a1-90e8-44f7-83d9-59c88e83cf9b', name: '1ª VARA DO TRABALHO DE SANTA ROSA/RS', document: null, juntoId: 56626, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '17759c7e-6246-4c74-b188-c92ced6c4bee', name: '1ª VARA DO TRABALHO DE SANTA VITÓRIA DO PALMAR/RS', document: null, juntoId: 56627, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4ac5e738-4dba-479c-904e-12d847b6563f', name: '1ª VARA DO TRABALHO DE SANTANA DE PARNAÍBA /SP', document: null, juntoId: 56298, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '819a45e8-ee5a-4efe-9ab8-bf4ec310a7bc', name: '1ª VARA DO TRABALHO DE SANTANA DO IPANEMA/AL', document: null, juntoId: 57454, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd9ee3cc-acf0-4f7f-85fd-da357cc31861', name: '1ª VARA DO TRABALHO DE SANTANA DO LIVRAMENTO/RS', document: null, juntoId: 56628, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '56893489-ab0d-4f60-b659-fd6eea120cf2', name: '1ª VARA DO TRABALHO DE SANTARÉM/PA', document: null, juntoId: 56923, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e96d2738-a675-4003-b564-22e407ce559d', name: '1ª VARA DO TRABALHO DE SANTIAGO/RS', document: null, juntoId: 56629, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dc8852c9-4082-485c-bf35-6d891a4ac48d', name: '1ª VARA DO TRABALHO DE SANTO AMARO/BA', document: null, juntoId: 56745, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7e2a187a-8012-41b6-9e83-00736ded9c6c', name: '1ª VARA DO TRABALHO DE SANTO ANDRÉ /SP', document: null, juntoId: 56299, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '605c2ca5-05aa-467a-8701-d1dce60f8fb3', name: '1ª VARA DO TRABALHO DE SANTO ÂNGELO/RS', document: null, juntoId: 56630, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '27bd7aeb-c8b3-4ef4-85c6-9e565e9751e1', name: '1ª VARA DO TRABALHO DE SANTO ANTÔNIO DA PLATINA/PR', document: null, juntoId: 57004, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '21c2a93e-f92b-4a78-93f9-2cde8319300f', name: '1ª VARA DO TRABALHO DE SANTO ANTÔNIO DE JESUS/BA', document: null, juntoId: 56746, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b8983bc1-34c8-4c9b-ad28-e837b0af2301', name: '1ª VARA DO TRABALHO DE SANTOS /SP', document: null, juntoId: 56300, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '75642626-ced8-4481-b7f5-0855a2bd9c2a', name: '1ª VARA DO TRABALHO DE SÃO BERNARDO DO CAMPO  /SP', document: null, juntoId: 56301, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ce2b2732-5ad6-423f-858c-ebdfe09ea569', name: '1ª VARA DO TRABALHO DE SÃO BORJA/RS', document: null, juntoId: 56631, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4f78ed79-cc55-4d34-b1fc-4b71634801ca', name: '1ª VARA DO TRABALHO DE SÃO CAETANO DO SUL /SP', document: null, juntoId: 56302, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e8d56d7e-8e7f-46c5-a666-46aa20844b75', name: '1ª VARA DO TRABALHO DE SÃO CARLOS/SP', document: null, juntoId: 57267, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '637a42dd-d82c-4760-b43e-3a2596c55ede', name: '1ª VARA DO TRABALHO DE SÃO FÉLIX DO XINGU/PA', document: null, juntoId: 56924, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e00d20c-1460-49dd-a667-bfbb0ea0eed4', name: '1ª VARA DO TRABALHO DE SÃO GABRIEL DO OESTE/MS', document: null, juntoId: 57575, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8ff5177f-9040-425e-8685-041d17189f19', name: '1ª VARA DO TRABALHO DE SÃO GABRIEL/RS', document: null, juntoId: 56632, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8ad3ba12-5fcc-4faf-86d2-6cb68b370d67', name: '1ª VARA DO TRABALHO DE SÃO GONÇALO/RJ', document: null, juntoId: 56142, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '37b09223-f7cd-48e7-a3d8-c03528387706', name: '1ª VARA DO TRABALHO DE SÃO JERÔNIMO/RS', document: null, juntoId: 56633, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c63e4348-c32f-4ca4-974d-6b2c8b0bea5a', name: '1ª VARA DO TRABALHO DE SÃO JOÃO DA BOA VISTA/SP', document: null, juntoId: 57384, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6defbdd8-4845-47d4-a030-473d3dd6856d', name: '1ª VARA DO TRABALHO DE SÃO JOÃO DE MERITI/RJ', document: null, juntoId: 56143, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1a9ce335-9a14-47e2-ac11-00c1bfc00c33', name: '1ª VARA DO TRABALHO DE SÃO JOÃO DEL REI/MG', document: null, juntoId: 56484, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a552e210-6e60-4d7b-9141-c82e4a36b2ee', name: '1ª VARA DO TRABALHO DE SÃO JOÃO DOS PATOS/MA', document: null, juntoId: 57626, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4797d290-2eb3-40ff-894b-9cd5fd782f5a', name: '1ª VARA DO TRABALHO DE SÃO JOAQUIM DA BARRA/SP', document: null, juntoId: 57385, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6b9bfdf2-f23d-42d5-b3f7-0db4a7bcd5ba', name: '1ª VARA DO TRABALHO DE SÃO JOSÉ DO RIO PARDO/SP', document: null, juntoId: 57386, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '37872ad8-eb5a-4607-a608-eee1e2de78fd', name: '1ª VARA DO TRABALHO DE SÃO JOSÉ DO RIO PRETO/SP', document: null, juntoId: 57268, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f1f4fd0f-50f8-4431-a22b-57141314aa4f', name: '1ª VARA DO TRABALHO DE SÃO JOSÉ DOS CAMPOS/SP', document: null, juntoId: 57269, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '894d105a-2843-4996-9127-891361b2443b', name: '1ª VARA DO TRABALHO DE SÃO JOSÉ DOS PINHAIS/PR', document: null, juntoId: 57005, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '56248812-7d7d-4bfb-a9fc-870f00f53adc', name: '1ª VARA DO TRABALHO DE SÃO LEOPOLDO/RS', document: null, juntoId: 56634, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1ce8bb4c-5ba8-47d1-b9e6-636de626af64', name: '1ª VARA DO TRABALHO DE SÃO LOURENÇO DA MATA/PE', document: null, juntoId: 56827, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6b51e7dc-92a4-43f2-984a-d42e0710dbf5', name: '1ª VARA DO TRABALHO DE SÃO LUÍS DE MONTES BELOS/GO', document: null, juntoId: 57426, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ed96664-257d-4f59-9736-753c35234620', name: '1ª VARA DO TRABALHO DE SÃO LUÍS/MA', document: null, juntoId: 57608, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8d616b03-01f2-444d-8c0e-5b841f6721c5', name: '1ª VARA DO TRABALHO DE SÃO LUIZ DO QUITUNDE/AL', document: null, juntoId: 57455, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '43993eee-7fdb-4b9b-8b8c-09c32b4e5aa9', name: '1ª VARA DO TRABALHO DE SÃO MATEUS/ES', document: null, juntoId: 57592, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f894d4c5-7bf4-4334-940e-e4f62e9d9821', name: '1ª VARA DO TRABALHO DE SÃO MIGUEL DOS CAMPOS/AL', document: null, juntoId: 57456, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '325dc571-1830-4ae3-b0dc-6e926953d27a', name: '1ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56303, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ea02551e-a16f-4187-b2cf-082e5e0070d8', name: '1ª VARA DO TRABALHO DE SÃO RAIMUNDO NONATO/PI', document: null, juntoId: 57513, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'de39f089-1a77-48c1-ad93-67db20020136', name: '1ª VARA DO TRABALHO DE SÃO ROQUE/SP', document: null, juntoId: 57387, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1def67d5-0eae-4934-b272-d07e915a54a6', name: '1ª VARA DO TRABALHO DE SÃO SEBASTIÃO DO PARAÍSO/MG', document: null, juntoId: 56485, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f22d9ce4-f01c-4f58-a02c-8f66377b812c', name: '1ª VARA DO TRABALHO DE SÃO SEBASTIÃO/SP', document: null, juntoId: 57388, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fcbdd5e1-b85d-4bfb-ba1c-a55d45d7bff3', name: '1ª VARA DO TRABALHO DE SÃO VICENTE /SP', document: null, juntoId: 56304, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b5fb37e1-b679-4f18-a02d-73db2224122b', name: '1ª VARA DO TRABALHO DE SAPEZAL/MT', document: null, juntoId: 57554, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd5cac0e-c462-4b0a-9d73-86056c9ff3d6', name: '1ª VARA DO TRABALHO DE SAPIRANGA/RS', document: null, juntoId: 56635, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '931ebb60-26d7-43cd-bb43-8bf94a127c27', name: '1ª VARA DO TRABALHO DE SAPUCAIA DO SUL/RS', document: null, juntoId: 56636, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '09763aa6-9c97-45eb-980f-057203442548', name: '1ª VARA DO TRABALHO DE SENA MADUREIRA/AC', document: null, juntoId: 57243, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5c911af0-12e7-4280-94ed-1cf6be2b39f0', name: '1ª VARA DO TRABALHO DE SENHOR DO BONFIM/BA', document: null, juntoId: 56747, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '98bb1e77-c814-422c-8b94-dc0559f45f0c', name: '1ª VARA DO TRABALHO DE SERRA TALHADA/PE', document: null, juntoId: 56828, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f2289fef-28cf-446b-b0b7-e244afe0eca4', name: '1ª VARA DO TRABALHO DE SERTÃOZINHO/SP', document: null, juntoId: 57270, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '175332e5-da36-452d-9f05-d6a498535363', name: '1ª VARA DO TRABALHO DE SETE LAGOAS/MG', document: null, juntoId: 56486, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e879fec5-da91-4b43-89fa-38920c171ac9', name: '1ª VARA DO TRABALHO DE SIMÕES FILHO/BA', document: null, juntoId: 56748, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a400f9cd-029e-4da4-b9e6-4ab33409616e', name: '1ª VARA DO TRABALHO DE SINOP/MT', document: null, juntoId: 57537, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bf9bde46-6cda-45c2-9357-f0bffdf7c1c9', name: '1ª VARA DO TRABALHO DE SOBRAL/CE', document: null, juntoId: 56884, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3f8f8597-3df7-4926-ae04-4e0a1127b494', name: '1ª VARA DO TRABALHO DE SOLEDADE/RS', document: null, juntoId: 56637, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dbae30ff-7f92-48be-80d2-d33b4404cacd', name: '1ª VARA DO TRABALHO DE SOROCABA/SP', document: null, juntoId: 57271, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '277df8b1-fe75-4dec-a4ca-d59d3240c8d4', name: '1ª VARA DO TRABALHO DE SORRISO/MT', document: null, juntoId: 57538, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5fd9f4f9-0ee4-4a2d-943a-17980d337d0e', name: '1ª VARA DO TRABALHO DE SOUSA/PB', document: null, juntoId: 57211, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1bab070b-90a3-4023-86db-dfab1a14443e', name: '1ª VARA DO TRABALHO DE SUMARÉ/SP', document: null, juntoId: 57389, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6e5e68c7-003b-4758-b32a-d19bf40eefb4', name: '1ª VARA DO TRABALHO DE SUZANO /SP', document: null, juntoId: 56305, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f394f479-d036-4ff9-b6da-28b5bd9e3744', name: '1ª VARA DO TRABALHO DE TABATINGA/AM', document: null, juntoId: 57113, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'eb92ce94-0326-4fed-bacf-0b2ad672e8eb', name: '1ª VARA DO TRABALHO DE TABOÃO DA SERRA /SP', document: null, juntoId: 56306, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '951f5d83-5932-4c7f-960c-d7fc2e6a682f', name: '1ª VARA DO TRABALHO DE TAGUATINGA/DF', document: null, juntoId: 57074, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '17dc50bf-724d-47cb-a6cc-243d6f214e88', name: '1ª VARA DO TRABALHO DE TANABI/SP', document: null, juntoId: 57390, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a1227f91-ad46-4d3a-87ba-53e629379306', name: '1ª VARA DO TRABALHO DE TANGARÁ DA SERRA/MT', document: null, juntoId: 57539, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4d45a0c7-440e-4e18-82c0-5402d8edb028', name: '1ª VARA DO TRABALHO DE TAQUARA/RS', document: null, juntoId: 56638, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '851bf043-3f19-404f-b5c0-bbcb8fd01f2b', name: '1ª VARA DO TRABALHO DE TAQUARITINGA/SP', document: null, juntoId: 57391, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4e080a57-3972-4953-b6c4-a3a0aa633c8f', name: '1ª VARA DO TRABALHO DE TATUÍ/SP', document: null, juntoId: 57392, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c9824099-4c11-46fb-93ce-8dd47f729f1f', name: '1ª VARA DO TRABALHO DE TAUBATÉ/SP', document: null, juntoId: 57272, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1cf2fdf6-d9e6-49f8-b466-25728dbaa887', name: '1ª VARA DO TRABALHO DE TEFÉ/AM', document: null, juntoId: 57114, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a8a193a1-a671-432d-bcd3-60cc8ba47256', name: '1ª VARA DO TRABALHO DE TEIXEIRA DE FREITAS/BA', document: null, juntoId: 56749, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3cffeaf3-0492-4aaf-96e1-7248264fd18f', name: '1ª VARA DO TRABALHO DE TELÊMACO BORBA/PR', document: null, juntoId: 57006, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '74fb2bf5-efdd-4438-9c70-fddea50eeeef', name: '1ª VARA DO TRABALHO DE TEODORO SAMPAIO/SP', document: null, juntoId: 57393, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a9fb32ec-f1ce-4796-80a9-c26b45547d73', name: '1ª VARA DO TRABALHO DE TEÓFILO OTONI/MG', document: null, juntoId: 56487, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6df63851-6a39-4c95-bfe1-e8ddb50fbefc', name: '1ª VARA DO TRABALHO DE TERESINA/PI', document: null, juntoId: 57514, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e0fcfe3-f703-4e4a-8fca-c17bb1bf5381', name: '1ª VARA DO TRABALHO DE TERESÓPOLIS/RJ', document: null, juntoId: 56144, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '693ac342-4de5-46a5-b864-401038ed2b13', name: '1ª VARA DO TRABALHO DE TIANGUÁ/CE', document: null, juntoId: 56885, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '161539cb-0d4d-4bd4-a685-9f8ecc31d657', name: '1ª VARA DO TRABALHO DE TIETÊ/SP', document: null, juntoId: 57394, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '199bd774-7806-40f4-b0a9-0eb4f276f963', name: '1ª VARA DO TRABALHO DE TIMBAÚBA/PE', document: null, juntoId: 56829, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fc4327fe-f6bb-44dc-9529-335c453598ff', name: '1ª VARA DO TRABALHO DE TIMON/MA', document: null, juntoId: 57628, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5167dd06-facb-43dc-9fa0-c0025879609a', name: '1ª VARA DO TRABALHO DE TOLEDO/PR', document: null, juntoId: 57007, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5ebcafbc-dea6-488e-8038-b9658e16219e', name: '1ª VARA DO TRABALHO DE TOMÉ-AÇU/PA', document: null, juntoId: 56925, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dbd9a2ea-d118-4e6d-8cdc-f4ef37256a38', name: '1ª VARA DO TRABALHO DE TORRES/RS', document: null, juntoId: 56639, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0879ae85-e778-436e-8555-773a4d54f17f', name: '1ª VARA DO TRABALHO DE TRÊS CORAÇÕES/MG', document: null, juntoId: 56488, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4423289d-12c0-4423-a22e-0044b6ab6590', name: '1ª VARA DO TRABALHO DE TRÊS LAGOAS/MS', document: null, juntoId: 57576, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f3ce3992-2b98-4414-acc3-284363a1695e', name: '1ª VARA DO TRABALHO DE TRÊS PASSOS/RS', document: null, juntoId: 56640, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1653d5be-e002-45c5-91ad-877cffac1ce0', name: '1ª VARA DO TRABALHO DE TRÊS RIOS/RJ', document: null, juntoId: 56145, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5c47c969-3a8a-4aac-92d8-e25d691165ee', name: '1ª VARA DO TRABALHO DE TRIUNFO/RS', document: null, juntoId: 56641, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'eaa45426-d369-417c-8739-5beb6677567b', name: '1ª VARA DO TRABALHO DE TUCURUÍ/PA', document: null, juntoId: 56926, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '06442754-9832-42f3-93ef-7349e51cb3d4', name: '1ª VARA DO TRABALHO DE TUPÃ/SP', document: null, juntoId: 57395, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e9541619-ad21-4a58-924c-aa45b74d6678', name: '1ª VARA DO TRABALHO DE UBÁ/MG', document: null, juntoId: 56489, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '117e3d1e-b448-4cb2-97d6-f978dfc22793', name: '1ª VARA DO TRABALHO DE UBATUBA/SP', document: null, juntoId: 57396, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4a6fbe15-2a71-4707-b83e-e769266a36f7', name: '1ª VARA DO TRABALHO DE UBERABA/MG', document: null, juntoId: 56490, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '60305252-61c2-4c2e-94d6-dc3254041cfe', name: '1ª VARA DO TRABALHO DE UBERLÂNDIA/MG', document: null, juntoId: 56491, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0cef5983-594c-4ebe-946f-08f0d28751d1', name: '1ª VARA DO TRABALHO DE UMUARAMA/PR', document: null, juntoId: 57009, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd6a3f9bf-28a6-47a2-a5a6-99de3a1d5dc3', name: '1ª VARA DO TRABALHO DE UNAÍ/MG', document: null, juntoId: 56492, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '47d25ff2-8776-4c4c-b69f-f00bdb20fdb8', name: '1ª VARA DO TRABALHO DE UNIÃO DA VITÓRIA/PR', document: null, juntoId: 57010, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '79540e36-b78f-403f-89f0-8569fb4dc792', name: '1ª VARA DO TRABALHO DE UNIÃO DOS PALMARES/AL', document: null, juntoId: 57457, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd56487c6-46c4-4425-a9d6-ca1f599f2e9e', name: '1ª VARA DO TRABALHO DE URUAÇU/GO', document: null, juntoId: 57427, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6d00ff2d-6e74-425a-b109-9257ba67a249', name: '1ª VARA DO TRABALHO DE URUÇUÍ/PI', document: null, juntoId: 57515, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '755bbe2d-9213-4d1a-8195-14c4fabf8e6b', name: '1ª VARA DO TRABALHO DE URUGUAIANA/RS', document: null, juntoId: 56642, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c6efa7d2-b2bf-4cc2-bcdd-c5ccc38a4319', name: '1ª VARA DO TRABALHO DE VACARIA/RS', document: null, juntoId: 56643, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '28f57a5d-b7a3-4b16-980f-b025de8d0cdc', name: '1ª VARA DO TRABALHO DE VALENÇA DO PIAUÍ/PI', document: null, juntoId: 57516, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cb780df0-1cd0-48b2-8072-b53e1dfd62f6', name: '1ª VARA DO TRABALHO DE VALENÇA/BA', document: null, juntoId: 56750, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '874be2d4-8a42-4582-a32f-d0d5966b1cf7', name: '1ª VARA DO TRABALHO DE VALPARAÍSO DE GOIÁS/GO', document: null, juntoId: 57428, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3a503eb4-ce1f-4305-acf0-e56736eea45e', name: '1ª VARA DO TRABALHO DE VARA DE CONGONHAS/MG', document: null, juntoId: 56493, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c154885a-5d22-4ee7-9bef-11f557346144', name: '1ª VARA DO TRABALHO DE VARGINHA/MG', document: null, juntoId: 56494, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '29867374-e193-4bc8-9610-7c1c60951422', name: '1ª VARA DO TRABALHO DE VÁRZEA GRANDE/MT', document: null, juntoId: 57540, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd7918f27-f8ea-48c3-9a40-fd22bb2caf1c', name: '1ª VARA DO TRABALHO DE VENDA NOVA DO IMIGRANTE/ES', document: null, juntoId: 57593, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a90c7220-51af-42c7-a789-862d5069ffc3', name: '1ª VARA DO TRABALHO DE VIAMÃO/RS', document: null, juntoId: 56644, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '951ad84e-9350-4143-91b8-4c79a3f93169', name: '1ª VARA DO TRABALHO DE VIÇOSA/MG', document: null, juntoId: 56495, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '28c0c6fc-2b6a-47c5-85e1-4de219919dbf', name: '1ª VARA DO TRABALHO DE VILHENA/RO', document: null, juntoId: 57244, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae46d4b3-f570-41a7-bd35-cc586435f08e', name: '1ª VARA DO TRABALHO DE VITÓRIA DA CONQUISTA/BA', document: null, juntoId: 56751, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8ca64701-df45-4279-928e-4749e1b64040', name: '1ª VARA DO TRABALHO DE VITÓRIA DE SANTO ANTÃO/PE', document: null, juntoId: 56830, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '254f40b4-e830-4b48-af25-e84e4cca25cc', name: '1ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57594, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '32e63586-ccee-49c3-a45d-52bfa0e803c4', name: '1ª VARA DO TRABALHO DE VOLTA REDONDA/RJ', document: null, juntoId: 56146, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7f865b0e-f8bf-46fe-9cef-c2eb8f529840', name: '1ª VARA DO TRABALHO DE VOTUPORANGA/SP', document: null, juntoId: 57397, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '227b0d61-3806-45bd-be90-585f159a2609', name: '1ª VARA DO TRABALHO DE WENCESLAU BRAZ/PR', document: null, juntoId: 57011, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2e030e03-42b4-4ac3-bf6c-d5d97c12ed8c', name: '1ª VARA DO TRABALHO DE XINGUARA/PA', document: null, juntoId: 56927, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'de702196-baf8-40e7-8317-84ed117925c0', name: '1ª VARA DO TRABALHO DO GAMA/DF', document: null, juntoId: 57075, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6a8a32f0-20f3-4ef4-b96f-730fc97496ee', name: '1ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56831, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a5386a0e-ff22-4a4d-8a21-269cf59ca33a', name: '1ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56147, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1a218f62-a224-4426-95d0-535c360694b0', name: '1ª VARA DO TRABALHO FLORIANÓPOLIS/SC', document: null, juntoId: 57136, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '76732e93-75a7-4cdc-ab25-367df35d4e0c', name: '1ª VARA DO TRABALHO IMBITUBA/SC', document: null, juntoId: 57137, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '57918585-c7f6-4f4e-9009-14a9ffa5400c', name: '1ª VARA DO TRABALHO INDAIAL/SC', document: null, juntoId: 57138, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'df616126-7d5a-4145-aff3-00b1d0f27c3a', name: '1ª VARA DO TRABALHO ITAJAÍ/SC', document: null, juntoId: 57139, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '52d662b3-eda2-4ab3-9f29-aec18770a021', name: '1ª VARA DO TRABALHO JARAGUÁ DO SUL/SC', document: null, juntoId: 57140, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bc735be3-4211-48cf-84e0-c4312aaf7c92', name: '1ª VARA DO TRABALHO JOAÇABA/SC', document: null, juntoId: 57141, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '815f50ec-9dcd-423c-a252-046449bb0e00', name: '1ª VARA DO TRABALHO JOINVILLE/SC', document: null, juntoId: 57142, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '35920ebf-69b7-449d-8802-169064954397', name: '1ª VARA DO TRABALHO LAGES/SC', document: null, juntoId: 57143, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2e35fdd7-e15b-4435-9496-25c29ed536a9', name: '1ª VARA DO TRABALHO MAFRA/SC', document: null, juntoId: 57144, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b3937aad-736e-43c4-8fe7-5879e116275f', name: '1ª VARA DO TRABALHO NAVEGANTES/SC', document: null, juntoId: 57145, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9b9706da-0b93-429e-bf00-dd313fd0c397', name: '1ª VARA DO TRABALHO RIO DO SUL/SC', document: null, juntoId: 57146, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e70db17f-58c9-4899-b712-80a1c3033cdc', name: '1ª VARA DO TRABALHO SÃO BENTO DO SUL/SC', document: null, juntoId: 57147, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2243dfe1-5b5b-4724-a16f-8a5bb233c25f', name: '1ª VARA DO TRABALHO SÃO JOSÉ/SC', document: null, juntoId: 57148, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'acfbdd52-4863-4216-9cd6-e1b3f37436f4', name: '1ª VARA DO TRABALHO SÃO MIGUEL DO OESTE/SC', document: null, juntoId: 57149, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3acab62b-dd89-4ee5-b917-315c0e04a91d', name: '1ª VARA DO TRABALHO TIMBÓ/SC', document: null, juntoId: 57150, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f89208a2-dce1-4bc1-b90c-6c4cf08d9115', name: '1ª VARA DO TRABALHO TUBARÃO/SC', document: null, juntoId: 57151, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '13d9549f-9d8c-4727-aaf2-aefb562931ac', name: '1ª VARA DO TRABALHO VIDEIRA/SC', document: null, juntoId: 57152, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'acd7fcc1-f20c-49c3-9cd4-887efbfcc6c1', name: '1ª VARA DO TRABALHO XANXERÊ/SC', document: null, juntoId: 57153, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3a38c58f-899c-47d9-9251-417b97276869', name: '20ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56496, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '227b5f09-7024-4080-9980-d25411e0dbd7', name: '20ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57076, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bae09a54-ffe8-46d4-9fe2-e768a8a9f06d', name: '20ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56645, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '716c2771-d13a-4ef9-abad-db1685e66903', name: '20ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56752, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8f01b81b-56f1-44e0-a501-a21be637d36e', name: '20ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56307, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'babd89cb-a7c4-428a-8a38-8a8a953f84b3', name: '20ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56832, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c09afff9-055f-4ffd-8b10-4dfe322331c7', name: '20ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56148, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '42521618-c76c-41da-9fe9-365c5f0e5927', name: '21ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56497, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3584cf9f-36ac-467e-8f16-b65789491201', name: '21ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57077, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c00b775d-4c03-41f0-9606-263d07326016', name: '21ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57012, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0fedb3b7-aefa-4cbe-9a58-46a4f807f911', name: '21ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56646, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'da8134ed-6d91-4a13-8358-c1cad2d2ab65', name: '21ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56753, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e5e4d6a5-842e-4ba7-9eb1-60a008a82981', name: '21ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56308, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e6806475-dfcf-48d8-9c14-270828d6deb1', name: '21ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56833, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '87d1837f-5f8a-44d2-b24e-d12545684932', name: '21ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56149, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c61572dc-eeb3-49b3-85a0-270be500c4a0', name: '22ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56498, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fde570d3-c297-41c9-8f57-19c641c1de26', name: '22ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57078, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6c366105-8e83-4520-86db-be9f76612d3d', name: '22ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57013, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3999e3ad-f8c2-42a5-abed-7fcfe17f750e', name: '22ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56647, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '562b8df0-c793-4c57-b2de-38471cad9a58', name: '22ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56754, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dfce8e7c-4ada-4656-a95c-4970715dfc89', name: '22ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56309, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4f7c9546-bb5a-4510-a156-37f3b60b229f', name: '22ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56834, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8dfd0115-98ad-4d6b-a448-21219b0edaed', name: '22ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56150, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a467da89-9b45-4e1b-9545-9fcc6116fb4a', name: '23ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56499, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bad22dab-5b73-4de2-b8a2-badf6d297dd2', name: '23ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57014, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '49de6581-cc27-4928-af14-20577672ed04', name: '23ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56648, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '82cb8b6b-d9aa-4256-8520-721720208894', name: '23ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56755, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5003d002-f95b-4d14-970f-65dabe789889', name: '23ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56310, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a48ab217-0ef9-4a99-8294-93c366400c4e', name: '23ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56835, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dc448d40-28bb-401d-b581-fb6d1ee0a86f', name: '23ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56151, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a5e9a8cc-9fb4-4b18-9f74-61a6040038c2', name: '24ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56500, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '933814e0-7635-48ff-8844-b2ba4340d4c8', name: '24ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56649, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '95d0be2f-ee07-4a48-af76-5c323b1cb8b7', name: '24ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56756, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0cde9176-0ef5-4399-aeb6-887c6e48ac92', name: '24ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56311, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e662926-279a-4625-8d0d-ff627e4d638d', name: '24ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56152, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7492ac2f-88b8-407d-9c58-54cb22efba7b', name: '25ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56501, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '939a65de-16a6-428b-841f-1794fd0b933e', name: '25ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56650, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '924442ee-44a7-452a-8fee-eda5c91ec956', name: '25ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56757, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a57ac510-914b-4ba0-9044-5117d5d0a1f5', name: '25ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56312, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '143fb62f-167e-4aee-8234-a9b6a58d37a2', name: '25ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56153, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ba2d4e70-31b7-425e-8791-931e9b82db59', name: '26ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56502, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '64d7a286-0377-4ca5-957c-0b36e2018496', name: '26ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56651, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '776e0e77-8233-4888-949c-afdea8c9fc7d', name: '26ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56758, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8acc42fd-91f3-426a-b73c-825e91b35f2f', name: '26ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56313, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '26e88874-a58c-4ef5-b557-bc76502d1000', name: '26ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56154, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8a6a7540-1596-40b2-b1eb-74dc1410b127', name: '27ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56503, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a24938cd-5aaa-4b1f-b6bd-b62be2fd7e24', name: '27ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56652, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4e815c3d-97ec-4c66-bfc6-034deb9a2651', name: '27ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56759, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '30135cfa-a753-42c3-b272-5324badc3507', name: '27ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56314, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '234bb2ed-1e4b-4c48-a5e3-9cca9b0fca1f', name: '27ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56155, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8d48e65a-7903-4139-911e-5bf54046fcd3', name: '28ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56504, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0140ef13-02aa-4136-9b01-167eb9a589e6', name: '28ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56653, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5168aff1-3ea8-480b-a5ff-e763a7bc6c16', name: '28ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56760, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '61567c38-5af0-4546-9cf1-281415de8655', name: '28ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56315, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '264dda89-6f46-4cc9-b75d-df757479e60d', name: '28ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56156, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '32b50e6f-e6bd-47a6-b5e7-bcc27a37810e', name: '29ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56505, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bcfa79c3-0eb9-426f-8997-dff7c985c2c3', name: '29ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56654, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b36818e7-70ae-44a8-92d8-d6261327cd16', name: '29ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56761, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0476bd0c-0e9f-4285-a8dd-997179458558', name: '29ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56316, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2fc31992-57b2-4e76-bac9-49c987dc1c16', name: '29ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56157, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '73a59e13-d63b-40d2-b1a0-96d09eefb9d1', name: '2ª VARA DO TRABALHO CHAPECÓ/SC', document: null, juntoId: 57154, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7acbdaf7-fd4d-4eb4-9942-47acd74f9069', name: '2ª VARA DO TRABALHO CRICIÚMA/SC', document: null, juntoId: 57155, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7540b1da-18b5-40c2-8e93-6620a8090e5e', name: '2ª VARA DO TRABALHO DA REGIÃO DO CARIRI (JUAZEIRO DO NORTE)/CE', document: null, juntoId: 56886, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bbac889f-9277-41ad-b5eb-5d5e45a5831d', name: '2ª VARA DO TRABALHO DE ABAETETUBA/PA', document: null, juntoId: 56928, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dc2edeed-b332-4627-8d40-77de8fcfca97', name: '2ª VARA DO TRABALHO DE ALAGOINHAS/BA', document: null, juntoId: 56762, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c4e4b276-2717-4aa1-99b3-d02323d9162f', name: '2ª VARA DO TRABALHO DE ALFENAS/MG', document: null, juntoId: 56506, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1c7136c9-5800-4ece-b4de-bbc5ef62c58c', name: '2ª VARA DO TRABALHO DE AMERICANA/SP', document: null, juntoId: 57273, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7c7f46c0-5d38-4d39-8298-1e51bdf2cd98', name: '2ª VARA DO TRABALHO DE ANANINDEUA/PA', document: null, juntoId: 56929, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4921e683-f19e-4231-a424-bd54e30a5efd', name: '2ª VARA DO TRABALHO DE ANÁPOLIS/GO', document: null, juntoId: 57429, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ee1eb64-69fc-4964-af2c-6f162c6eadf7', name: '2ª VARA DO TRABALHO DE APARECIDA DE GOIÂNIA/GO', document: null, juntoId: 57430, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '92030881-1c59-4467-ab41-b17633b1f127', name: '2ª VARA DO TRABALHO DE APUCARANA/PR', document: null, juntoId: 57015, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c5502103-2196-4a37-b155-cb55d8a0c05f', name: '2ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57475, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b9acd908-8bab-4b98-8a6a-4e9853ddbbbb', name: '2ª VARA DO TRABALHO DE ARAÇATUBA/SP', document: null, juntoId: 57274, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '55dbee4b-7b1a-422a-b450-bdf3d788ffd7', name: '2ª VARA DO TRABALHO DE ARAGUAÍNA/TO', document: null, juntoId: 57079, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '412f8b5c-2e5c-4ba5-9d6b-85ea447c2484', name: '2ª VARA DO TRABALHO DE ARAGUARI/MG', document: null, juntoId: 56507, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c345cf5b-6db7-4197-8cd7-dfbb907b713f', name: '2ª VARA DO TRABALHO DE ARARAQUARA/SP', document: null, juntoId: 57275, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a70580db-7d82-48e7-be4c-cee85698c57c', name: '2ª VARA DO TRABALHO DE ARAUCÁRIA/PR', document: null, juntoId: 57016, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cffc604e-d838-419d-815f-d1d9317870e5', name: '2ª VARA DO TRABALHO DE ARIQUEMES/RO', document: null, juntoId: 57217, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '70234bd0-dd5d-404a-9e23-05899e910b43', name: '2ª VARA DO TRABALHO DE ASSIS/SP', document: null, juntoId: 57276, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a95a646a-d829-4c9f-8906-62e9077af499', name: '2ª VARA DO TRABALHO DE BAGÉ/RS', document: null, juntoId: 56655, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '95cc5a63-9988-410d-8919-5303956de945', name: '2ª VARA DO TRABALHO DE BALNEÁRIO CAMBORIÚ/SC', document: null, juntoId: 57156, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '28268859-9f3a-43d8-82f0-05e430922f2a', name: '2ª VARA DO TRABALHO DE BARBACENA/MG', document: null, juntoId: 56508, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1bbda1a3-503f-496d-b0be-22e8a5d87190', name: '2ª VARA DO TRABALHO DE BARREIROS/PE', document: null, juntoId: 56836, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '01eeb180-aa86-487e-8c7d-a13070ab690f', name: '2ª VARA DO TRABALHO DE BARUERI /SP', document: null, juntoId: 56266, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '83f2a653-4223-44ea-ae3b-0ddb4645f057', name: '2ª VARA DO TRABALHO DE BAURU/SP', document: null, juntoId: 57277, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a2c7b20d-6248-4925-be3c-4ae3e26e54cb', name: '2ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56930, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '54060f64-24da-410a-bc55-b43f177b0779', name: '2ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56509, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a35a8113-130f-454a-9906-3f77d819a802', name: '2ª VARA DO TRABALHO DE BENTO GONÇALVES/RS', document: null, juntoId: 56656, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1daee677-c134-4da2-b6e4-b67d35f34cd5', name: '2ª VARA DO TRABALHO DE BETIM/MG', document: null, juntoId: 56510, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'faec1949-4d40-49cb-b80f-15a4a6fa9b2d', name: '2ª VARA DO TRABALHO DE BLUMENAU/SC', document: null, juntoId: 57157, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '13f9abee-e953-44b9-99c3-25c4b563e8e8', name: '2ª VARA DO TRABALHO DE BOA VISTA/RO', document: null, juntoId: 57115, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e212a600-2966-427c-96d5-b904d5949cb0', name: '2ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57080, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae9d692f-b4f2-414a-ba49-f8727a709b97', name: '2ª VARA DO TRABALHO DE BRUSQUE/SC', document: null, juntoId: 57158, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd90a7ef5-0d6f-429f-b433-302a1a6a82dc', name: '2ª VARA DO TRABALHO DE CABO DE SANTO AGOSTINHO/PE', document: null, juntoId: 56837, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c5e03aa7-62dc-4ac1-a34c-7ee618db7176', name: '2ª VARA DO TRABALHO DE CABO FRIO/RJ', document: null, juntoId: 56158, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6f8a22bb-9554-4f1b-be06-d93b0607b8fe', name: '2ª VARA DO TRABALHO DE CACHOEIRINHA/RS', document: null, juntoId: 56657, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '88f84847-bcd3-4070-b0e3-9705d6fcf9c8', name: '2ª VARA DO TRABALHO DE CACHOEIRO DE ITAPEMIRIM/ES', document: null, juntoId: 57586, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ea76f3d-f8ef-49d6-b681-8d40b1db68d3', name: '2ª VARA DO TRABALHO DE CAMAÇARI/BA', document: null, juntoId: 56763, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '54e22465-2a39-4c6a-ac61-6faaaa453531', name: '2ª VARA DO TRABALHO DE CAMPINA GRANDE/PB', document: null, juntoId: 57198, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6d46f361-5f64-431a-9a35-c01ce74b0d85', name: '2ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57278, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c4e72946-6d66-4075-964f-5433c2045acb', name: '2ª VARA DO TRABALHO DE CAMPO GRANDE/MS', document: null, juntoId: 57577, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8f2fe0c1-ae26-4932-b0dd-489608bf536e', name: '2ª VARA DO TRABALHO DE CAMPOS DOS GOYTACAZES/RJ', document: null, juntoId: 56159, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '87c2fd8d-7065-44d6-ab82-5ee423bece60', name: '2ª VARA DO TRABALHO DE CANDEIAS/BA', document: null, juntoId: 56764, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bdeb4f99-f1b4-49e3-b20f-961aa931082b', name: '2ª VARA DO TRABALHO DE CANOAS/RS', document: null, juntoId: 56658, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5be48ad1-bdfe-4238-86cb-215237eaddc2', name: '2ª VARA DO TRABALHO DE CARUARU/PE', document: null, juntoId: 56838, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f58fc43d-9614-4ebe-adbe-07fb1761350a', name: '2ª VARA DO TRABALHO DE CASCAVEL/PR', document: null, juntoId: 57017, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6c47dd51-0d4b-4b04-8f84-07dbdf36c6c4', name: '2ª VARA DO TRABALHO DE CATANDUVA/SP', document: null, juntoId: 57279, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7f297ab0-cc91-4895-b957-1e39895f3aae', name: '2ª VARA DO TRABALHO DE CAXIAS DO SUL/RS', document: null, juntoId: 56659, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '631c9886-d266-4658-8ce7-5ce48f99ba4a', name: '2ª VARA DO TRABALHO DE COLOMBO/PR', document: null, juntoId: 57018, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '85a70cc7-4599-4e5d-a637-12dca37e7518', name: '2ª VARA DO TRABALHO DE CONTAGEM/MG', document: null, juntoId: 56511, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ffca0308-bf21-47b4-84d2-7ca2d8e87f45', name: '2ª VARA DO TRABALHO DE CORNÉLIO PROCÓPIO/PR', document: null, juntoId: 57019, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '748b4931-82dd-4cd9-a60f-e211777a15c9', name: '2ª VARA DO TRABALHO DE CORONEL FABRICIANO/MG', document: null, juntoId: 56512, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'df001cd0-5f4a-4c05-a6e7-0982c35756ef', name: '2ª VARA DO TRABALHO DE COTIA /SP', document: null, juntoId: 56267, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '830d7b41-4c16-4290-8434-c05c99e564bc', name: '2ª VARA DO TRABALHO DE CUBATÃO /SP', document: null, juntoId: 56268, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2095ac7e-0d62-44ba-b22d-00d3a23a20d6', name: '2ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57541, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6c244b3f-4081-4e1c-a79f-c0ba04500c6b', name: '2ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57020, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '78f17f75-816f-4678-8ff6-1ca9ba225fd0', name: '2ª VARA DO TRABALHO DE DIADEMA /SP', document: null, juntoId: 56269, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dce5b617-15b0-42c1-bef0-07910aaff124', name: '2ª VARA DO TRABALHO DE DIVINÓPOLIS/MG', document: null, juntoId: 56513, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bf1e2114-3bc9-413f-b615-5c71f063f867', name: '2ª VARA DO TRABALHO DE DOURADOS/MS', document: null, juntoId: 57578, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1ddd1137-b921-4896-ac09-a6e7d5c81939', name: '2ª VARA DO TRABALHO DE DUQUE DE CAXIAS/RJ', document: null, juntoId: 56160, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '554d2521-b168-4e83-b98f-7a00b6ebd8f5', name: '2ª VARA DO TRABALHO DE ERECHIM/RS', document: null, juntoId: 56660, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f5e2492c-6c87-4de5-9436-16787dd75309', name: '2ª VARA DO TRABALHO DE ESTEIO/RS', document: null, juntoId: 56661, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '29d6a8b4-5796-4d5b-b5fa-177f576fdb76', name: '2ª VARA DO TRABALHO DE ESTRELA/RS', document: null, juntoId: 56662, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '39c59cb5-182a-476a-b47c-76be077b9cf9', name: '2ª VARA DO TRABALHO DE FEIRA DE SANTANA/BA', document: null, juntoId: 56765, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0744dd66-8264-42bc-b8d8-f0feee50d2a9', name: '2ª VARA DO TRABALHO DE FORMIGA/MG', document: null, juntoId: 56514, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4fc866c7-be82-491a-b182-27a058c2b671', name: '2ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56887, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c43ec5bb-ec15-470f-a474-68fe9d94af91', name: '2ª VARA DO TRABALHO DE FOZ DO IGUAÇU/PR', document: null, juntoId: 57022, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b9b8260b-44ba-4291-b2f3-a7be4721f2da', name: '2ª VARA DO TRABALHO DE FRANCA/SP', document: null, juntoId: 57280, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a2a4a21c-c3ab-42d2-825c-61dd31f3cf93', name: '2ª VARA DO TRABALHO DE FRANCISCO BELTRÃO/PR', document: null, juntoId: 57023, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '136c9fe9-e759-4734-9ab3-91d2a62e07d1', name: '2ª VARA DO TRABALHO DE GOIANA/PE', document: null, juntoId: 56839, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae296585-691c-4284-87a0-d709e57843a7', name: '2ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57431, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ad308ce5-7a6e-4022-a5ae-1076ace3d679', name: '2ª VARA DO TRABALHO DE GOVERNADOR VALADARES/MG', document: null, juntoId: 56515, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e2b5e5e9-3247-4ee6-a744-58e5e126cf10', name: '2ª VARA DO TRABALHO DE GRAMADO/RS', document: null, juntoId: 56663, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ee63c875-df0d-407e-8524-72fc18847e9c', name: '2ª VARA DO TRABALHO DE GRAVATAÍ/RS', document: null, juntoId: 56664, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0c131f4d-d9dc-46ef-9434-ae90270c7f94', name: '2ª VARA DO TRABALHO DE GUARAPARI/ES', document: null, juntoId: 57589, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '59cd2027-7c8f-4c50-96ba-75bd18dcdce7', name: '2ª VARA DO TRABALHO DE GUARAPUAVA/PR', document: null, juntoId: 57024, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '08fc4d8e-bdbd-4d63-867e-de6062fd811e', name: '2ª VARA DO TRABALHO DE GUARUJÁ /SP', document: null, juntoId: 56317, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '47224801-39e1-495b-b834-55523eecfac9', name: '2ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56318, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a3310153-4f30-4b03-95c9-efa0a5be8487', name: '2ª VARA DO TRABALHO DE IGARASSU/PE', document: null, juntoId: 56840, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd9f23300-cfc4-4f63-9e17-c21f46c031f4', name: '2ª VARA DO TRABALHO DE ILHÉUS/BA', document: null, juntoId: 56766, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cefc1114-4374-47d0-9c16-1d4309ee8346', name: '2ª VARA DO TRABALHO DE IMPERATRIZ/MA', document: null, juntoId: 57630, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7037ccff-74e2-4ab3-b929-898657e39694', name: '2ª VARA DO TRABALHO DE IPOJUCA/PE', document: null, juntoId: 56841, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2835bb1b-09d0-4e43-b45c-946156cfc4cf', name: '2ª VARA DO TRABALHO DE ITABIRA/MG', document: null, juntoId: 56516, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cc90bd8b-5742-45c1-8b88-1ab3641b4eec', name: '2ª VARA DO TRABALHO DE ITAGUAÍ/RJ', document: null, juntoId: 56161, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '66bbf2ad-861f-4e48-b975-29dfbaede6ff', name: '2ª VARA DO TRABALHO DE ITAPECERICA DA SERRA /SP', document: null, juntoId: 56319, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6e60d10c-f42d-4591-b905-9f04fb5235a8', name: '2ª VARA DO TRABALHO DE ITUIUTABA/MG', document: null, juntoId: 56517, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd4548e57-ed54-4926-a3b9-8c5eacd844b9', name: '2ª VARA DO TRABALHO DE ITUMBIARA/GO', document: null, juntoId: 57432, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c11b1744-d8ff-4a3e-8bc7-57ddfe22bb27', name: '2ª VARA DO TRABALHO DE JABOATÃO DOS GUARARAPES/PE', document: null, juntoId: 56842, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f643b524-af82-45bd-8d7e-5a0448eb2ab3', name: '2ª VARA DO TRABALHO DE JABOTICABAL/SP', document: null, juntoId: 57281, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0d4f0c1a-10ea-4321-8631-2fc5b962c3c8', name: '2ª VARA DO TRABALHO DE JACAREÍ/SP', document: null, juntoId: 57282, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7453ae8a-ebcd-4408-a13d-cbe73e9ade25', name: '2ª VARA DO TRABALHO DE JAÚ/SP', document: null, juntoId: 57283, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'eb6c1ce6-e50d-4bac-bd3d-53ded21de939', name: '2ª VARA DO TRABALHO DE JI-PARANÁ/RO', document: null, juntoId: 57218, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5766b65f-cf5b-482e-a654-a488185bac4e', name: '2ª VARA DO TRABALHO DE JOÃO MONLEVADE/MG', document: null, juntoId: 56518, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fa0a178b-88be-4590-a6e5-5f7d4f686129', name: '2ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57199, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e6abc33-6269-4ba1-9a80-d9930dcea431', name: '2ª VARA DO TRABALHO DE JUAZEIRO/BA', document: null, juntoId: 56767, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '43e38609-913c-4820-8f14-acd7f708baab', name: '2ª VARA DO TRABALHO DE JUIZ DE FORA/MG', document: null, juntoId: 56519, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5e8ea5f5-45fa-4221-a8cd-c62560679252', name: '2ª VARA DO TRABALHO DE JUNDIAÍ/SP', document: null, juntoId: 57284, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '08eaf757-4f78-429f-aa97-3f1df395239f', name: '2ª VARA DO TRABALHO DE LAJEADO/RS', document: null, juntoId: 56665, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3cc18c4c-ab55-4c87-9d92-eec4947e83b1', name: '2ª VARA DO TRABALHO DE LENÇÓIS PAULISTA/SP', document: null, juntoId: 57285, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '91af3768-5b05-41ab-9ead-d48b8c8329e2', name: '2ª VARA DO TRABALHO DE LIMEIRA/SP', document: null, juntoId: 57286, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c69881a1-e33a-4715-a4b9-553aea7ef2c0', name: '2ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 57025, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7c8d3dea-a72a-4550-9675-3da909458d41', name: '2ª VARA DO TRABALHO DE MACAÉ/RJ', document: null, juntoId: 56162, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ee03d18c-64c5-46db-a7e2-d70a7deacb54', name: '2ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56931, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '52cc99d9-5ed1-4f58-8ef5-dfc40c6c714a', name: '2ª VARA DO TRABALHO DE MACAU/RN', document: null, juntoId: 57494, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e581a556-b612-4625-8d29-ea88dcd7c533', name: '2ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57458, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '31ec58de-c96b-4cad-96f8-fc811dbf0838', name: '2ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57116, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c9a68aea-9e18-473b-987a-4215cdbb9b73', name: '2ª VARA DO TRABALHO DE MARABÁ/PA', document: null, juntoId: 56932, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5f27cf2b-b645-4d1b-b35c-8641e32659fa', name: '2ª VARA DO TRABALHO DE MARACANAÚ/CE', document: null, juntoId: 56888, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8f973123-5a2b-4269-bb52-ac9ca4877c0d', name: '2ª VARA DO TRABALHO DE MARÍLIA/SP', document: null, juntoId: 57287, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b31d9618-192a-42e3-8094-844564a5c753', name: '2ª VARA DO TRABALHO DE MARINGÁ/PR', document: null, juntoId: 57026, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0a59c2a6-33cd-41f4-af2f-7fc97bf2abed', name: '2ª VARA DO TRABALHO DE MAUÁ /SP', document: null, juntoId: 56320, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a085e8c9-a27d-4e48-9fde-5c83098b70a4', name: '2ª VARA DO TRABALHO DE MOGI DAS CRUZES /SP', document: null, juntoId: 56321, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3ee0f2fd-127c-4cd7-881b-68bc863d8464', name: '2ª VARA DO TRABALHO DE MONTES CLAROS/MG', document: null, juntoId: 56520, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4f9387c0-40bd-44dc-b4c7-65489943096b', name: '2ª VARA DO TRABALHO DE MOSSORÓ/RN', document: null, juntoId: 57495, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd6a059b9-bfef-4973-8037-ff46fd0dc732', name: '2ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57496, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3a213f96-cf8b-4006-a14e-d8de50817f89', name: '2ª VARA DO TRABALHO DE NAZARÉ DA MATA/PE', document: null, juntoId: 56843, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1c35bcd8-c400-42b4-996a-de9492ad5024', name: '2ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56163, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fc526a9c-6a76-48a0-8b08-d6ee5b475c4f', name: '2ª VARA DO TRABALHO DE NOVA FRIBURGO/RJ', document: null, juntoId: 56164, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '07b83cdf-5b90-4f9b-92c6-2fb7cca32d85', name: '2ª VARA DO TRABALHO DE NOVA IGUAÇU/RJ', document: null, juntoId: 56165, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3851f321-4f1c-4613-92a5-5b93a211e92a', name: '2ª VARA DO TRABALHO DE NOVA LIMA/MG', document: null, juntoId: 56521, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8bb38610-a0bc-4d0c-b34b-c480ddb5b7ac', name: '2ª VARA DO TRABALHO DE NOVO HAMBURGO/RS', document: null, juntoId: 56666, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'aa5e559e-3e53-4473-a27b-2094a50a221a', name: '2ª VARA DO TRABALHO DE OLINDA/PE', document: null, juntoId: 56844, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '98984b11-db86-4144-bd10-d84450dfe3e9', name: '2ª VARA DO TRABALHO DE OSASCO /SP', document: null, juntoId: 56322, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '39bfe95f-1767-4180-8424-bff81a76c0cd', name: '2ª VARA DO TRABALHO DE PALMARES/PE', document: null, juntoId: 56845, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b97a5836-317b-48c6-8624-e0398f827da5', name: '2ª VARA DO TRABALHO DE PALMAS/TO', document: null, juntoId: 57081, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f55d8cb0-596f-4090-b168-1784f987d272', name: '2ª VARA DO TRABALHO DE PARANAGUÁ/PR', document: null, juntoId: 57027, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e261d19c-1b75-48f4-a0b5-3609d49b488c', name: '2ª VARA DO TRABALHO DE PARAUAPEBAS/PA', document: null, juntoId: 56933, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6313481b-725d-4d96-8edb-7f4987590275', name: '2ª VARA DO TRABALHO DE PASSO FUNDO/RS', document: null, juntoId: 56667, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8f7d9e03-cffa-4c4d-a215-e2658726c919', name: '2ª VARA DO TRABALHO DE PASSOS/MG', document: null, juntoId: 56522, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0ce77653-61b8-4cb1-acce-6b13b409b21d', name: '2ª VARA DO TRABALHO DE PATO BRANCO/PR', document: null, juntoId: 57028, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c8bfcda6-9884-4445-b188-d0464d256532', name: '2ª VARA DO TRABALHO DE PAULÍNIA/SP', document: null, juntoId: 57288, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '931cc307-6d9f-48d8-aaf3-4894100c8642', name: '2ª VARA DO TRABALHO DE PAULISTA/PE', document: null, juntoId: 56846, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '16919f47-2147-43e3-bd44-495b9d9c9a83', name: '2ª VARA DO TRABALHO DE PEDRO LEOPOLDO/MG', document: null, juntoId: 56523, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4717e8ff-09c1-4012-bed1-f3dd3e114faa', name: '2ª VARA DO TRABALHO DE PELOTAS/RS', document: null, juntoId: 56668, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '12a73e2d-dcc5-486b-ab11-0d7706159584', name: '2ª VARA DO TRABALHO DE PETROLINA/PE', document: null, juntoId: 56847, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e65a410-1411-4e34-8556-dceaf764e2dc', name: '2ª VARA DO TRABALHO DE PETROPÓLIS/RJ', document: null, juntoId: 56166, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '25a44ac3-f318-40dd-824a-e4001e787e3c', name: '2ª VARA DO TRABALHO DE PIRACICABA/SP', document: null, juntoId: 57289, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '25a73aee-4f3b-462a-a72d-411c3aa80b47', name: '2ª VARA DO TRABALHO DE POÇOS DE CALDAS/MG', document: null, juntoId: 56524, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4ced6861-fbe8-47d5-a4b7-181dacf111c7', name: '2ª VARA DO TRABALHO DE PONTA GROSSA/PR', document: null, juntoId: 57029, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3c5ae687-bf57-492a-967c-52754d89246c', name: '2ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56669, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bebab581-def1-4b5f-9bc6-c0d9ecceaf09', name: '2ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57219, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a8063e28-ec14-40c3-a766-a1c207a1b4ec', name: '2ª VARA DO TRABALHO DE POUSO ALEGRE/MG', document: null, juntoId: 56525, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '592ec51c-cde7-4450-82b3-7347ba7706aa', name: '2ª VARA DO TRABALHO DE PRAIA GRANDE /SP', document: null, juntoId: 56323, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '90c09d19-b1e4-41b3-9f89-72168afcd62b', name: '2ª VARA DO TRABALHO DE PRESIDENTE PRUDENTE/SP', document: null, juntoId: 57290, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '94b56884-a390-4c4e-acd4-6a9a3903e0a8', name: '2ª VARA DO TRABALHO DE RESENDE/RJ', document: null, juntoId: 56167, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b7e1b6b8-e822-45b0-a309-85518e8154e3', name: '2ª VARA DO TRABALHO DE RIBEIRÃO PRETO/SP', document: null, juntoId: 57291, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7258d366-c144-4da7-b0e7-86db78ad24db', name: '2ª VARA DO TRABALHO DE RIBEIRÃO/PE', document: null, juntoId: 56848, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd0698ec7-f91f-44ba-95dc-77d14acf5e61', name: '2ª VARA DO TRABALHO DE RIO BRANCO/AC', document: null, juntoId: 57220, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1935e906-6a6e-4984-88c0-be1c6ac66374', name: '2ª VARA DO TRABALHO DE RIO GRANDE/RS', document: null, juntoId: 56670, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2e85f577-816c-4216-b6d4-59ee28d16808', name: '2ª VARA DO TRABALHO DE RIO VERDE/GO', document: null, juntoId: 57433, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4de1a59b-217b-48f6-a95c-b8bfd62600b6', name: '2ª VARA DO TRABALHO DE RONDONÓPOLIS/MT', document: null, juntoId: 57542, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '915659a7-2f0c-4994-935d-73b2cd5aeb10', name: '2ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56768, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5fb325ae-299a-42f6-af6d-a2aaddc876a7', name: '2ª VARA DO TRABALHO DE SANTA CRUZ DO SUL/RS', document: null, juntoId: 56671, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9c4bbb49-e49e-430d-a046-e518b01a4b5e', name: '2ª VARA DO TRABALHO DE SANTA MARIA/RS', document: null, juntoId: 56672, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e1ad61b2-5938-4b6b-847f-b266116a96e3', name: '2ª VARA DO TRABALHO DE SANTA RITA/PB', document: null, juntoId: 57200, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8f929a7b-7bc3-4c34-af19-ab8f123f3f95', name: '2ª VARA DO TRABALHO DE SANTA ROSA/RS', document: null, juntoId: 56673, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8fafb13e-18c2-42fa-ba10-d135f9399e7a', name: '2ª VARA DO TRABALHO DE SANTARÉM/PA', document: null, juntoId: 56934, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'daf0689b-3b8a-44de-95a9-5e92d55c4d99', name: '2ª VARA DO TRABALHO DE SANTO ANDRÉ /SP', document: null, juntoId: 56324, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1da685c0-0e8a-4299-b5d5-6213fd7b67a6', name: '2ª VARA DO TRABALHO DE SANTOS /SP', document: null, juntoId: 56325, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '72efca88-3048-4f30-9a8d-c73a66624a57', name: '2ª VARA DO TRABALHO DE SÃO BERNARDO DO CAMPO  /SP', document: null, juntoId: 56326, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b5f45c27-0013-47f3-9c18-275ce96c4323', name: '2ª VARA DO TRABALHO DE SÃO CAETANO DO SUL /SP', document: null, juntoId: 56327, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ab935e4b-3deb-4ad8-a595-44b2409e8a86', name: '2ª VARA DO TRABALHO DE SÃO CARLOS/SP', document: null, juntoId: 57292, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c349e37d-8d5d-4278-94f4-f1b195f45539', name: '2ª VARA DO TRABALHO DE SÃO GONÇALO/RJ', document: null, juntoId: 56168, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4f96f040-4f44-482a-9395-53d2d4b95347', name: '2ª VARA DO TRABALHO DE SÃO JOÃO DE MERITI/RJ', document: null, juntoId: 56169, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd28a48fc-873b-4c4c-8379-14fa223a9849', name: '2ª VARA DO TRABALHO DE SÃO JOSÉ DO RIO PRETO/SP', document: null, juntoId: 57293, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c24adc4a-fcbf-4aea-9b34-233fd5c56c3a', name: '2ª VARA DO TRABALHO DE SÃO JOSÉ DOS CAMPOS/SP', document: null, juntoId: 57294, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b75b45ae-83a9-49cd-bc08-46bfb9158021', name: '2ª VARA DO TRABALHO DE SÃO JOSÉ DOS PINHAIS/PR', document: null, juntoId: 57030, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1d1eab8e-f4e2-45e9-8ac2-0ee45c2c2d9a', name: '2ª VARA DO TRABALHO DE SÃO LEOPOLDO/RS', document: null, juntoId: 56674, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cb4a5739-019c-4453-9150-ed4e60a1a2dc', name: '2ª VARA DO TRABALHO DE SÃO LUÍS/MA', document: null, juntoId: 57609, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1418a3d5-c83f-4677-896e-403fe2b31878', name: '2ª VARA DO TRABALHO DE SÃO MIGUEL DOS CAMPOS/AL', document: null, juntoId: 57459, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ac5858ed-1e2b-4ba9-80f4-3783211fe63e', name: '2ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56328, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b0f0016f-83ae-4824-a850-e23fd6f1ebeb', name: '2ª VARA DO TRABALHO DE SÃO VICENTE /SP', document: null, juntoId: 56329, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '75246b93-d1d3-4c69-91c7-1efd8b34dc97', name: '2ª VARA DO TRABALHO DE SAPIRANGA/RS', document: null, juntoId: 56675, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '69b8cba8-b75b-4137-a65c-f0c2863dfe7b', name: '2ª VARA DO TRABALHO DE SAPUCAIA DO SUL/RS', document: null, juntoId: 56676, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8c287efc-bc9c-4484-bfc9-7d5669a8fff7', name: '2ª VARA DO TRABALHO DE SERTÃOZINHO/SP', document: null, juntoId: 57295, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae7cd334-c9c5-43c9-b972-1ad0883d0ff7', name: '2ª VARA DO TRABALHO DE SETE LAGOAS/MG', document: null, juntoId: 56526, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b52474da-1108-41ab-adac-f9492fba2fbe', name: '2ª VARA DO TRABALHO DE SIMÕES FILHO/BA', document: null, juntoId: 56769, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dda8be70-6423-4271-a7b9-7d51c5141f80', name: '2ª VARA DO TRABALHO DE SINOP/MT', document: null, juntoId: 57543, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e89bc9ef-8f33-4289-a6b5-f87add751a16', name: '2ª VARA DO TRABALHO DE SOROCABA/SP', document: null, juntoId: 57296, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4c52b47c-d72c-4fb1-9114-f7bc199a2a25', name: '2ª VARA DO TRABALHO DE SUZANO /SP', document: null, juntoId: 56330, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '67e8759f-d2e1-4fa8-9277-5bcd0031ccb4', name: '2ª VARA DO TRABALHO DE TAGUATINGA/DF', document: null, juntoId: 57082, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '98bd0c6c-e7bf-41c0-9ded-94bb21ca7df4', name: '2ª VARA DO TRABALHO DE TANGARÁ DA SERRA/MT', document: null, juntoId: 57544, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e3f928bc-901f-4ce7-adee-b5d1c0f87c98', name: '2ª VARA DO TRABALHO DE TAQUARA/RS', document: null, juntoId: 56677, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b4f1aba1-6294-431b-9c94-4e872fd46d86', name: '2ª VARA DO TRABALHO DE TAUBATÉ/SP', document: null, juntoId: 57297, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '81c38ea1-c7b3-4c46-aad8-5bf357f38e4e', name: '2ª VARA DO TRABALHO DE TERESINA/PI', document: null, juntoId: 57517, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd31e4fb0-f481-448e-b042-15c8654af2e4', name: '2ª VARA DO TRABALHO DE TOLEDO/PR', document: null, juntoId: 57031, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '21ef0cf0-4c45-468b-81d7-dbe862733c04', name: '2ª VARA DO TRABALHO DE TRÊS LAGOAS/MS', document: null, juntoId: 57579, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0ace6494-e97f-419b-9178-461d1e82c3dd', name: '2ª VARA DO TRABALHO DE TUCURUÍ/PA', document: null, juntoId: 56935, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '703aff59-0fec-4ad9-a676-d371ccdaca4f', name: '2ª VARA DO TRABALHO DE UBERABA/MG', document: null, juntoId: 56527, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '94d21f90-a11a-4758-b668-67a2ec215662', name: '2ª VARA DO TRABALHO DE UBERLÂNDIA/MG', document: null, juntoId: 56528, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e9e5af7d-2dd2-49b5-b557-5ac21d9394ae', name: '2ª VARA DO TRABALHO DE UMUARAMA/PR', document: null, juntoId: 57032, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3c2e1cc3-ce8c-4264-96ba-67b0f6605fd3', name: '2ª VARA DO TRABALHO DE UNIÃO DOS PALMARES/AL', document: null, juntoId: 57460, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8d9ac1da-d099-4e4d-b119-545b230465b0', name: '2ª VARA DO TRABALHO DE URUGUAIANA/RS', document: null, juntoId: 56678, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '662e6315-6168-406e-90b0-6344f7a4b79c', name: '2ª VARA DO TRABALHO DE VARGINHA/MG', document: null, juntoId: 56529, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c0a3c6d6-b935-4406-9205-60621b1316e3', name: '2ª VARA DO TRABALHO DE VÁRZEA GRANDE/MT', document: null, juntoId: 57545, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'efae0592-de93-4468-b782-647ae8f2232d', name: '2ª VARA DO TRABALHO DE VITÓRIA DA CONQUISTA/BA', document: null, juntoId: 56770, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '402a5871-7d13-44b5-a02a-d489461005c5', name: '2ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57595, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '56fb1d4e-0df1-4ec4-8597-be6921ce7bf0', name: '2ª VARA DO TRABALHO DE VOLTA REDONDA/RJ', document: null, juntoId: 56170, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '527a9e72-262b-47a1-ac0a-703961bad1a9', name: '2ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56849, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f0d02a01-9efd-457a-bc32-91f17f1f4e93', name: '2ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56171, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e4c649a7-2f9d-41f9-b172-d21d7a25cee3', name: '2ª VARA DO TRABALHO FLORIANÓPOLIS/SC', document: null, juntoId: 57159, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fe396a8a-514c-45c5-afad-2f904a3a7f97', name: '2ª VARA DO TRABALHO ITAJAÍ/SC', document: null, juntoId: 57160, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '823973c2-dad2-4f5d-8081-29d6012631ab', name: '2ª VARA DO TRABALHO JARAGUÁ DO SUL/SC', document: null, juntoId: 57161, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0c6c3528-0aad-40b3-9348-42ad4e0f9eac', name: '2ª VARA DO TRABALHO JOINVILLE/SC', document: null, juntoId: 57162, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1cfcded6-8f26-45c9-a6a2-24ede9300267', name: '2ª VARA DO TRABALHO LAGES/SC', document: null, juntoId: 57163, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '26333c34-bdd0-4580-89b1-28303f99d0e5', name: '2ª VARA DO TRABALHO RIO DO SUL/SC', document: null, juntoId: 57164, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '370dd472-14e9-442a-8431-e0ca1bfbe673', name: '2ª VARA DO TRABALHO SÃO JOSÉ/SC', document: null, juntoId: 57165, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae38a40e-f2c8-4f22-b514-2a656ee8ff9c', name: '2ª VARA DO TRABALHO TUBARÃO/SC', document: null, juntoId: 57166, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4e53b222-7df0-42b4-8eed-1cc287db6bf3', name: '30ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56530, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '083df8a6-2dcb-4095-b46e-ff7f64503f19', name: '30ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56679, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '68b89432-e6a2-4e7d-87b6-89c6f3664c9e', name: '30ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56771, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '95265f5d-7d3b-4a85-bed0-20f2f83be541', name: '30ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56331, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2a2c9703-35db-4fc4-ab09-94adc8ddf2a3', name: '30ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56172, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9e9b298e-77d2-4e79-a542-5c389aa5e4f5', name: '31ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56531, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '63b5b872-5924-47b5-9e5f-0963a2ec9008', name: '31ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56772, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '80638391-daee-4eaf-866d-d0f7b51d78a6', name: '31ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56332, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd897a972-f167-4e0b-a8a8-18b15cb2d01d', name: '31ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56173, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '54563ee2-c901-4846-a954-78245d7365b5', name: '32ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56532, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '19f4b21e-6043-4dec-8d96-7e5c99ad720f', name: '32ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56773, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd2ba0aaa-a06a-4268-857d-376d15c61122', name: '32ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56333, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0b6a82c4-540b-4478-ab99-e86bd77be437', name: '32ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56174, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3bcdb4fd-96ee-45f3-8772-bd203dccccc8', name: '33ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56533, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '527408f4-02fb-4617-85ff-131c90d88734', name: '33ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56774, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3a2c8987-76f6-405a-8dae-4469d2d2e32e', name: '33ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56334, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e48065a2-07c7-437d-9098-96e8b1313f22', name: '33ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56175, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7713034a-49d7-46c3-8a32-c4e1eea75e4c', name: '34ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56534, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7fc5ff76-05a9-489f-aad3-8461e404f3ac', name: '34ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56775, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f44d0cdc-4210-4632-9881-f8c0d5195b0c', name: '34ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56335, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5c850520-6956-49da-961c-aecd83ae4f81', name: '34ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56176, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '27bb3e5e-9f67-49d4-b95b-26687b09b521', name: '35ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56535, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '717f618d-c7fb-4c07-80ba-dc7b0f313c6e', name: '35ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56776, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '75583224-41be-4ac3-ac70-d3fc13317aad', name: '35ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56336, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a72506d8-152d-42ee-8164-632e820d36f6', name: '35ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56177, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e438a6ae-3764-41eb-9726-5bda63b11d41', name: '36ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56536, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f865b077-1920-4abc-bf38-d036d6abe268', name: '36ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56777, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2e9802b0-2931-48ed-aca6-ba4a0665af08', name: '36ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56337, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8f7396d9-0861-4f2a-b81d-3a482741a911', name: '36ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56178, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e9e5a738-f1ef-4116-8f99-2c7d7d8cb2c6', name: '37ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56537, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '55da3d6e-8818-4909-89e9-b1c238bed313', name: '37ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56778, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6c9b7b24-daeb-4b03-b41b-5cbf47bb4c36', name: '37ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56338, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b4011270-6263-45a8-93b1-76c74890b5bd', name: '37ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56179, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a07091c2-7391-41d0-bb91-6c549b4a4699', name: '38ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56538, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '792e3c8d-0026-468b-b5c4-76760814e702', name: '38ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56779, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '04c9338a-601a-4e74-9f38-8b19901150fa', name: '38ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56339, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9ad4e06a-2ce0-44b9-964c-b8533c1e8299', name: '38ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56180, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '55b9dc66-77a0-401c-a3bd-a16809f091d9', name: '39ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56539, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '608029a5-6f61-4f41-94b8-3cdece2eb4f2', name: '39ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56780, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a7e07c01-8eee-41a7-bfaa-1a3bf5cab2eb', name: '39ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56340, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ab3f3a9a-7743-40de-aa9f-b9437eaaa4b2', name: '39ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56181, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd35c7996-5bd9-46e8-9976-cf9655d19544', name: '3ª VARA CIVEL DA COMARCA DE MONTES CLAROS', document: null, juntoId: 56546, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '12695604-78a7-41c7-88fc-5452f48b0e65', name: '3ª VARA DO TRABALHO CRICIÚMA/SC', document: null, juntoId: 57167, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2b77ea56-ca79-4896-9f2a-58078f3ac849', name: '3ª VARA DO TRABALHO DE ANANINDEUA/PA', document: null, juntoId: 56936, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'decbcca4-070e-403c-a70d-587c8b9a0712', name: '3ª VARA DO TRABALHO DE ANÁPOLIS/GO', document: null, juntoId: 57434, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dd3ec1c9-770f-4866-bbc9-15c5115f75ab', name: '3ª VARA DO TRABALHO DE APARECIDA DE GOIÂNIA/GO', document: null, juntoId: 57435, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c5afda11-f3b7-4de7-a421-417cac3453e9', name: '3ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57476, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3abe45b0-9ed0-41d2-ad74-ebb057596f6d', name: '3ª VARA DO TRABALHO DE ARAÇATUBA/SP', document: null, juntoId: 57298, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '903ba785-5d7b-448f-a8b9-cbf195c20747', name: '3ª VARA DO TRABALHO DE ARARAQUARA/SP', document: null, juntoId: 57299, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '44c19dd2-7f03-4b6c-bd72-86ceb689f3ce', name: '3ª VARA DO TRABALHO DE BARUERI /SP', document: null, juntoId: 56270, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9b1a31e3-fa18-4bf6-a871-cc34d29c18a6', name: '3ª VARA DO TRABALHO DE BAURU/SP', document: null, juntoId: 57300, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4123ecfd-9da3-41f1-b363-3abc64d67da8', name: '3ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56937, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8aae8925-c0a9-494c-8f43-dc545df40f06', name: '3ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56540, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '070e6756-1dbf-4a69-9b6d-56c101eb7ed2', name: '3ª VARA DO TRABALHO DE BETIM/MG', document: null, juntoId: 56541, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '468cc29e-2e82-4d95-a797-4f080d0ea966', name: '3ª VARA DO TRABALHO DE BLUMENAU/SC', document: null, juntoId: 57168, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ac941451-8bd0-41b5-8d50-b21beaf805e2', name: '3ª VARA DO TRABALHO DE BOA VISTA/RO', document: null, juntoId: 57117, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ca40d6f5-c5f8-4abe-8b72-fc061d2d16f2', name: '3ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57083, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ec5e2211-6be1-4179-840b-ed2e8fcfc83a', name: '3ª VARA DO TRABALHO DE CAMAÇARI/BA', document: null, juntoId: 56781, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5c9a364a-cb79-40b4-bdab-2a8ced4a2f9e', name: '3ª VARA DO TRABALHO DE CAMPINA GRANDE/PB', document: null, juntoId: 57201, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '71b74b0e-b44b-4466-aa95-c5c95494f47e', name: '3ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57301, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a872264b-45b6-41ae-8261-fda30a6fc385', name: '3ª VARA DO TRABALHO DE CAMPO GRANDE/MS', document: null, juntoId: 57580, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '56d13db4-1a18-44f0-a915-987aa8cb2691', name: '3ª VARA DO TRABALHO DE CAMPOS DOS GOYTACAZES/RJ', document: null, juntoId: 56182, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '017dd496-77f7-4018-b366-68bd57ee98b1', name: '3ª VARA DO TRABALHO DE CANOAS/RS', document: null, juntoId: 56680, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5456bc44-1ea1-46fe-8daa-1312d45198f8', name: '3ª VARA DO TRABALHO DE CASCAVEL/PR', document: null, juntoId: 57033, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9f82edae-257e-4121-a79c-9e7e46febf05', name: '3ª VARA DO TRABALHO DE CAXIAS DO SUL/RS', document: null, juntoId: 56681, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a409c81f-f6af-4252-b94e-e1b3d135f1f4', name: '3ª VARA DO TRABALHO DE CHAPECÓ/SC', document: null, juntoId: 57169, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4151e7b8-c423-4b31-b6d9-c12b5ff9a773', name: '3ª VARA DO TRABALHO DE CONTAGEM/MG', document: null, juntoId: 56542, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd4fd2e5b-cd4e-4391-9629-7c72d73d9624', name: '3ª VARA DO TRABALHO DE CORONEL FABRICIANO/MG', document: null, juntoId: 56543, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '919740f0-0d12-4f9a-8a3e-af77014b3990', name: '3ª VARA DO TRABALHO DE CUBATÃO /SP', document: null, juntoId: 56271, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'db9f2f7a-d8ed-4891-a59f-a9bb0eee789e', name: '3ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57546, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '972fd26b-7dde-40be-959e-52d28b906e30', name: '3ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57034, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '056869a6-e1ab-40a5-b1e5-d643d013a7d9', name: '3ª VARA DO TRABALHO DE DIADEMA /SP', document: null, juntoId: 56272, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f2cdf997-657a-47aa-904e-014cc4ed8fa7', name: '3ª VARA DO TRABALHO DE DUQUE DE CAXIAS/RJ', document: null, juntoId: 56183, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '69936417-d87a-45e0-8f58-f396c57e8e27', name: '3ª VARA DO TRABALHO DE ERECHIM/RS', document: null, juntoId: 56682, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a636b776-b7a2-44af-9828-ace5391b81ae', name: '3ª VARA DO TRABALHO DE FEIRA DE SANTANA/BA', document: null, juntoId: 56782, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '876c9b51-f49c-4669-abc6-bc2a315bc623', name: '3ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56889, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8fd01bca-8393-4b83-94d1-e05977cc9afd', name: '3ª VARA DO TRABALHO DE FOZ DO IGUAÇU/PR', document: null, juntoId: 57035, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '81af936c-3386-4d6b-b511-49171b24a58c', name: '3ª VARA DO TRABALHO DE GOIANA/PE', document: null, juntoId: 56850, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '97183b73-4172-403e-ac97-7b05b3b23acc', name: '3ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57436, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0f4d89f1-e38c-4781-9ec0-cfbb5c05ba0e', name: '3ª VARA DO TRABALHO DE GOVERNADOR VALADARES/MG', document: null, juntoId: 56544, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e704ed2d-7f5c-4ae2-86b1-0d91e461bb48', name: '3ª VARA DO TRABALHO DE GRAVATAÍ/RS', document: null, juntoId: 56683, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a59c370c-ff9e-4037-8abf-3d6cbebbb661', name: '3ª VARA DO TRABALHO DE GUARUJÁ /SP', document: null, juntoId: 56341, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'da44faef-8151-4b7e-a183-02001e227e4a', name: '3ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56342, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3add3b61-8145-4ea0-b97f-1cc54755ef6b', name: '3ª VARA DO TRABALHO DE ILHÉUS/BA', document: null, juntoId: 56783, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b7a0abc4-c911-476a-b64d-b0f21a363a18', name: '3ª VARA DO TRABALHO DE IPOJUCA/PE', document: null, juntoId: 56851, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '982fef5a-576b-4b62-b52e-d51e5d076ab1', name: '3ª VARA DO TRABALHO DE JABOATÃO DOS GUARARAPES/PE', document: null, juntoId: 56852, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '639d6280-9de2-4030-a685-5e241d936ef3', name: '3ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57202, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1076ec4c-e04e-43ef-9403-f4a60e8d2d74', name: '3ª VARA DO TRABALHO DE JUIZ DE FORA/MG', document: null, juntoId: 56545, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c58d9687-f676-4ba4-b9f7-ca9a57a34336', name: '3ª VARA DO TRABALHO DE JUNDIAÍ/SP', document: null, juntoId: 57302, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f9de357b-767d-4843-8afa-5fddace19133', name: '3ª VARA DO TRABALHO DE LAGES/SC', document: null, juntoId: 57170, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5737c00d-20e2-4b03-bb11-8afc68c0e917', name: '3ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 57036, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '12ead168-183b-4695-b2ba-3065a3fdc2de', name: '3ª VARA DO TRABALHO DE MACAÉ/RJ', document: null, juntoId: 56184, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a7b0c817-9de9-4cf4-9f40-430a47cc0c7c', name: '3ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56938, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '44865feb-f1eb-466e-892b-1ed8bd20f8ed', name: '3ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57461, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '67d398e7-d0b1-4391-bc50-7e24784daea1', name: '3ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57118, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b3a37a9e-ce62-4b28-9247-8c95b3de842b', name: '3ª VARA DO TRABALHO DE MARABÁ/PA', document: null, juntoId: 56939, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ea955696-1e1e-4c45-8050-3d6dbc408322', name: '3ª VARA DO TRABALHO DE MARINGÁ/PR', document: null, juntoId: 57037, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7d8221e0-cb4c-40ca-a17b-2b8baa10485f', name: '3ª VARA DO TRABALHO DE MOGI DAS CRUZES /SP', document: null, juntoId: 56343, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9af0ef39-e9d5-41d0-805d-e83c5f6a89fd', name: '3ª VARA DO TRABALHO DE MOSSORÓ/RN', document: null, juntoId: 57497, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'aebaa652-38aa-4ab1-84e0-ed2c928160da', name: '3ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57498, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd501eb9d-18cb-42a7-a01e-349dd4adf3b6', name: '3ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56185, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '75543338-44df-4886-9139-80dd9be2f570', name: '3ª VARA DO TRABALHO DE NOVA IGUAÇU/RJ', document: null, juntoId: 56186, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e98a6156-488a-4b70-82c0-c9e08d927d78', name: '3ª VARA DO TRABALHO DE NOVO HAMBURGO/RS', document: null, juntoId: 56684, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae46ed49-2560-44a5-904d-38695740ea11', name: '3ª VARA DO TRABALHO DE OLINDA/PE', document: null, juntoId: 56853, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a3fd131a-234a-4c66-a8ca-f6fb3d4e90cc', name: '3ª VARA DO TRABALHO DE OSASCO /SP', document: null, juntoId: 56344, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '11ca763f-1ada-4fed-94f8-d65c5c3bfe13', name: '3ª VARA DO TRABALHO DE PARANAGUÁ/PR', document: null, juntoId: 57038, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7c634f81-01a1-45d4-a721-ff50edb03a25', name: '3ª VARA DO TRABALHO DE PARAUAPEBAS/PA', document: null, juntoId: 56940, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '350868fd-9630-488e-a215-676192fda8c7', name: '3ª VARA DO TRABALHO DE PASSO FUNDO/RS', document: null, juntoId: 56685, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8e87c937-3853-45b2-ae2d-c4300a32b187', name: '3ª VARA DO TRABALHO DE PELOTAS/RS', document: null, juntoId: 56686, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a812ffd0-3fcb-470c-932a-4ee4d44c7f45', name: '3ª VARA DO TRABALHO DE PETROLINA/PE', document: null, juntoId: 56854, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '99b3b70a-8d6f-4c3b-b638-84828ce518b4', name: '3ª VARA DO TRABALHO DE PIRACICABA/SP', document: null, juntoId: 57303, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '19103434-425d-458b-b5fa-e18748f0089d', name: '3ª VARA DO TRABALHO DE PONTA GROSSA/PR', document: null, juntoId: 57039, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5d5508e5-6838-4580-bfb9-f93e83268c36', name: '3ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56687, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f6d228c7-f1ae-46d8-818c-5d683818e558', name: '3ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57221, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ed67c0d9-26e5-4c60-8af6-685a48c40dbe', name: '3ª VARA DO TRABALHO DE POUSO ALEGRE/MG', document: null, juntoId: 56547, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd815dea4-e2a5-4e4e-962a-3a643fa2ff10', name: '3ª VARA DO TRABALHO DE RIBEIRÃO PRETO/SP', document: null, juntoId: 57304, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5fc46c7e-0139-4842-abec-dee1dc96c9e1', name: '3ª VARA DO TRABALHO DE RIO BRANCO/AC', document: null, juntoId: 57222, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0aa8f577-ddb9-42be-a5fe-5083cd941365', name: '3ª VARA DO TRABALHO DE RIO GRANDE/RS', document: null, juntoId: 56688, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fccf6f36-a586-4506-98af-7577862e486d', name: '3ª VARA DO TRABALHO DE RIO VERDE/GO', document: null, juntoId: 57437, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5acc1fd7-d2bf-436f-9be8-39fb98a9f289', name: '3ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56784, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a412dddc-e385-4954-94b5-843b796e7605', name: '3ª VARA DO TRABALHO DE SANTA CRUZ DO SUL/RS', document: null, juntoId: 56689, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '43030097-50d7-412c-ab12-08b339f12699', name: '3ª VARA DO TRABALHO DE SANTO ANDRÉ /SP', document: null, juntoId: 56345, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e00155b5-f281-43c3-a199-87a0f6e49aff', name: '3ª VARA DO TRABALHO DE SANTOS /SP', document: null, juntoId: 56346, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '02ba6521-4a04-4dfd-8294-d9d8de1f6ed1', name: '3ª VARA DO TRABALHO DE SÃO BERNARDO DO CAMPO  /SP', document: null, juntoId: 56347, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1ebc67b3-cbdc-4ea6-8052-0aedd4468f6d', name: '3ª VARA DO TRABALHO DE SÃO GONÇALO/RJ', document: null, juntoId: 56187, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '06391fe7-af0c-4cba-a77d-6365b53397d0', name: '3ª VARA DO TRABALHO DE SÃO JOÃO DE MERITI/RJ', document: null, juntoId: 56188, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1b61eb8b-3e5c-4fdc-ab5a-a0baf699ea34', name: '3ª VARA DO TRABALHO DE SÃO JOSÉ DO RIO PRETO/SP', document: null, juntoId: 57305, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'da184d54-3662-4449-9d55-7ba91c7b2185', name: '3ª VARA DO TRABALHO DE SÃO JOSÉ DOS CAMPOS/SP', document: null, juntoId: 57306, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1139ef4c-e670-4921-9bae-77121ae9a577', name: '3ª VARA DO TRABALHO DE SÃO JOSÉ DOS PINHAIS/PR', document: null, juntoId: 57040, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c0a48ae9-a911-479d-88d7-35eb42fcea1f', name: '3ª VARA DO TRABALHO DE SÃO LEOPOLDO/RS', document: null, juntoId: 56690, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '26b3b8f6-128e-44a9-b644-c85d077babfc', name: '3ª VARA DO TRABALHO DE SÃO LUÍS/MA', document: null, juntoId: 57610, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ec5fa98d-ad8f-43a7-9aeb-98ac9ffed4f4', name: '3ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56348, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '12c6afdb-7295-4845-8249-c41938095887', name: '3ª VARA DO TRABALHO DE SAPIRANGA/RS', document: null, juntoId: 56691, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b16bca6d-1ad1-4560-aef7-52b702c12d75', name: '3ª VARA DO TRABALHO DE SETE LAGOAS/MG', document: null, juntoId: 56548, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '48101b0b-1047-4140-b4e9-c4d21841c596', name: '3ª VARA DO TRABALHO DE SOROCABA/SP', document: null, juntoId: 57307, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4e0f7f0a-49f4-4ae8-833b-6b4d2c49745e', name: '3ª VARA DO TRABALHO DE TAGUATINGA/DF', document: null, juntoId: 57084, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '68a35399-e62f-4c61-b612-42566d2d4f47', name: '3ª VARA DO TRABALHO DE TAQUARA/RS', document: null, juntoId: 56692, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '49240fc4-9c1d-4692-bc05-7edd0ca6ef09', name: '3ª VARA DO TRABALHO DE TERESINA/PI', document: null, juntoId: 57518, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3d47da7d-4c4c-4544-b7ca-fb1fb5cef43e', name: '3ª VARA DO TRABALHO DE UBERABA/MG', document: null, juntoId: 56549, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '663ad0dd-26b8-4bbb-acc3-04a654bdfc0f', name: '3ª VARA DO TRABALHO DE UBERLÂNDIA/MG', document: null, juntoId: 56550, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f346aa4c-99d2-4bed-a5f7-b60f9d5b35dc', name: '3ª VARA DO TRABALHO DE VÁRZEA GRANDE/MT', document: null, juntoId: 57547, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1362b435-6a06-4108-96a6-7c1b07b6c58c', name: '3ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57596, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fc97fe45-fb46-469c-8c58-312c05a556aa', name: '3ª VARA DO TRABALHO DE VOLTA REDONDA/RJ', document: null, juntoId: 56189, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3aafcb26-b951-4901-bed6-a1a6e4a597b3', name: '3ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56855, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '02fa89aa-767c-435c-b527-c4c00161f0d4', name: '3ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56190, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e35be1a0-a9d3-424a-945e-7a85c71a1bab', name: '3ª VARA DO TRABALHO FLORIANÓPOLIS/SC', document: null, juntoId: 57171, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bfaaad66-4537-42a4-a328-6c55c827870e', name: '3ª VARA DO TRABALHO ITAJAÍ/SC', document: null, juntoId: 57172, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '83334aec-dfc8-442e-b0cd-9f733dd321fc', name: '3ª VARA DO TRABALHO JOINVILLE/SC', document: null, juntoId: 57173, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6f3aca7a-a92d-449b-b26d-f7f79e8c8846', name: '3ª VARA DO TRABALHO SÃO JOSÉ/SC', document: null, juntoId: 57174, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '28b82e16-8b09-4782-b6e7-25013cc76cce', name: '40ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56551, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd2f68bc4-343f-4fda-8edb-ab7aeab1086b', name: '40ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56349, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '78cdfc81-e1d2-4de2-830a-33fb3edf31db', name: '40ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56191, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bb879602-b0a8-45e2-b820-e1ad87184172', name: '41ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56552, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bd5ce3b7-1534-4686-9706-76e7ee4b647d', name: '41ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56350, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '13df17a9-8369-4a8b-b871-b68a109c6248', name: '41ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56192, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f753d183-1e8f-4b31-9bdc-5ca53c82336c', name: '42ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56553, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '537a8e18-28f0-4741-8004-6818dfc864b0', name: '42ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56351, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd26c4690-968d-43ea-b2e0-7fc7b17c7f8e', name: '42ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56193, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b13bb660-fb00-4bda-b69a-51d75d4bfae7', name: '43ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56554, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '71572b25-bd07-42a7-907d-006907e4e2bd', name: '43ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56352, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd18b848c-3842-4b67-a024-e1dbb3ddd1f2', name: '43ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56194, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7c438324-3590-4228-afee-3f1c09bc31e4', name: '44ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56555, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e8992907-e80d-4d90-81f8-5691d18dc23b', name: '44ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56353, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9f14626e-1789-45e6-8c3f-cb6215276ad7', name: '44ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56195, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ed61dad-6334-4679-a10b-9c1e79552846', name: '45ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56556, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd6a51b30-dc36-436e-8b59-fcb5ed58e664', name: '45ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56354, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'af5a9a5d-0a2f-4d85-9304-26706278996c', name: '45ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56196, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1c78199d-b1c7-49fe-96d5-578ee3aad691', name: '46ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56557, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1913ba48-25ce-4fcf-87b2-7cdf3df2e167', name: '46ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56355, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '956a92ad-b540-446e-bcd2-f6e5b6bc4b80', name: '46ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56197, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0b8b8011-76ce-465e-99ed-87040e916b05', name: '47ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56558, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0cc4e514-335d-49de-a9ec-dacd74baaffb', name: '47ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56356, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2fe1fe67-5e80-4bcb-a0ab-f94953cf2e87', name: '47ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56198, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3c58b699-1052-4255-987a-2f94b62f094c', name: '48ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56559, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9d2f54d4-447f-4fc3-a72d-f6e33878b1f8', name: '48ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56357, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1c2fcdc6-11df-4137-83a0-6a938ce2d1c1', name: '48ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56199, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b232df3b-c7c0-4d03-b696-1d5be340b289', name: '49ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56358, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6c1da0ca-0769-446c-958b-03add0b64bf2', name: '49ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56200, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8b715054-3d5a-4a0b-b303-1316ea573144', name: '4ª VARA DO TRABALHO CRICIÚMA/SC', document: null, juntoId: 57175, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4bf13a3e-8e9a-4a52-a312-4b714f6f2883', name: '4ª VARA DO TRABALHO DE ANANINDEUA/PA', document: null, juntoId: 56941, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bc399276-3fe1-4cdc-9db2-491cf3276133', name: '4ª VARA DO TRABALHO DE ANÁPOLIS/GO', document: null, juntoId: 57438, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd811de47-f820-4535-8a01-54d19bd46468', name: '4ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57477, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '97964fda-1b91-4850-8edf-ada397d6d7a6', name: '4ª VARA DO TRABALHO DE BAURU/SP', document: null, juntoId: 57308, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2bb73411-c6d4-4bfd-bdd4-73fc584ed222', name: '4ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56942, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '610331af-4e03-44da-9036-62335bf599c7', name: '4ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56560, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '50787160-f508-41c2-b3e6-c2964afbbe85', name: '4ª VARA DO TRABALHO DE BETIM/MG', document: null, juntoId: 56561, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '94cc5416-8284-4f90-8073-15c74229d1b3', name: '4ª VARA DO TRABALHO DE BLUMENAU/SC', document: null, juntoId: 57176, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '23e3756b-b81e-46de-a73c-1e8eb73d35ce', name: '4ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57085, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '18a9c1b2-c65a-4aef-8b15-e15575b1687a', name: '4ª VARA DO TRABALHO DE CAMAÇARI/BA', document: null, juntoId: 56785, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3213fb78-41f0-4877-9eec-97458e8f4e0a', name: '4ª VARA DO TRABALHO DE CAMPINA GRANDE/PB', document: null, juntoId: 57203, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ef72031-23e1-488b-8e8c-96d0286e7d8b', name: '4ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57309, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c817881a-1374-4c5f-8a96-94accf25c81a', name: '4ª VARA DO TRABALHO DE CAMPO GRANDE/MS', document: null, juntoId: 57581, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6a0d6131-98f4-4acb-9851-0860ccae6f23', name: '4ª VARA DO TRABALHO DE CAMPOS DOS GOYTACAZES/RJ', document: null, juntoId: 56201, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '59645f2d-328e-4788-86dc-f4ae52ac2d03', name: '4ª VARA DO TRABALHO DE CANOAS/RS', document: null, juntoId: 56693, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3c25fff5-0df3-47ee-a393-42ab7e143ff5', name: '4ª VARA DO TRABALHO DE CASCAVEL/PR', document: null, juntoId: 57041, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1a805cc3-db13-48ad-85d6-a8c2a8cf0df7', name: '4ª VARA DO TRABALHO DE CAXIAS DO SUL/RS', document: null, juntoId: 56694, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6d0023de-b588-4938-badb-a75a78874a04', name: '4ª VARA DO TRABALHO DE CHAPECÓ/SC', document: null, juntoId: 57177, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'be17f5bf-c768-4d16-b48c-727d4b838ddd', name: '4ª VARA DO TRABALHO DE CONTAGEM/MG', document: null, juntoId: 56562, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd63c16d7-c555-45e3-a785-570bb8bd2afb', name: '4ª VARA DO TRABALHO DE CORONEL FABRICIANO/MG', document: null, juntoId: 56563, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2071f084-8aef-4583-85c1-b046478d6000', name: '4ª VARA DO TRABALHO DE CUBATÃO /SP', document: null, juntoId: 56273, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cb8c58c0-9d43-445e-9cc2-287b6ad9cd21', name: '4ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57548, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5c94e7e3-bffb-4228-831a-f0e9fb75d048', name: '4ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57042, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cec2b0c1-a459-475b-a8b1-e161cd32cdf4', name: '4ª VARA DO TRABALHO DE DUQUE DE CAXIAS/RJ', document: null, juntoId: 56202, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4a1a34f0-ed89-4d70-b9cd-322c051546ca', name: '4ª VARA DO TRABALHO DE FEIRA DE SANTANA/BA', document: null, juntoId: 56786, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '810f5461-cfe9-43ee-a4f2-4091207ea888', name: '4ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56890, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7198884c-d156-4d2b-be24-2c04bb69456a', name: '4ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57439, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e0952d08-97ff-4852-94ad-832ed6986dad', name: '4ª VARA DO TRABALHO DE GRAVATAÍ/RS', document: null, juntoId: 56695, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dbcc2ace-3ef2-4e49-9595-b9c94cdebf48', name: '4ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56359, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b38bffff-0d50-420c-92f9-facf860571e5', name: '4ª VARA DO TRABALHO DE JABOATÃO DOS GUARARAPES/PE', document: null, juntoId: 56856, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cbc34ad6-2d31-4245-a73b-da2bf404f817', name: '4ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57204, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '36435706-3639-45db-987b-194500a2d775', name: '4ª VARA DO TRABALHO DE JUIZ DE FORA/MG', document: null, juntoId: 56564, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '38578a13-6a0c-49e6-b70b-f4907dff8d83', name: '4ª VARA DO TRABALHO DE JUNDIAÍ/SP', document: null, juntoId: 57310, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f657de20-fbf2-46f6-ae88-e873ed08b6cf', name: '4ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 57043, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b7a84e8f-5f06-4e03-8ad7-3ad3b9129613', name: '4ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56943, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'deb04a48-e696-4d10-afd4-076f5c2cf307', name: '4ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57462, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b96d838b-ce1e-4968-af5b-47c327ef8d48', name: '4ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57119, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '550e6ead-cf6e-4e20-84e0-a5f059b30703', name: '4ª VARA DO TRABALHO DE MARABÁ/PA', document: null, juntoId: 56944, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '58504ced-42e6-4e54-9496-7d3bf51dbc79', name: '4ª VARA DO TRABALHO DE MARINGÁ/PR', document: null, juntoId: 57044, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4230d62f-0b39-4419-8ffd-c23c0a538b7d', name: '4ª VARA DO TRABALHO DE MOSSORÓ/RN', document: null, juntoId: 57499, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '379814e2-7711-41e9-81b0-596bca78669b', name: '4ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57500, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e37ace35-42a1-4930-b5db-a6cd01c2e99b', name: '4ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56203, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3b821755-c330-47ed-855e-e3417795d8c4', name: '4ª VARA DO TRABALHO DE NOVA IGUAÇU/RJ', document: null, juntoId: 56204, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8c56dde1-ac8c-45d8-af43-e321f76b2cc0', name: '4ª VARA DO TRABALHO DE NOVO HAMBURGO/RS', document: null, juntoId: 56696, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ac249fe6-048c-4bd5-aec3-0c08dc8a90f0', name: '4ª VARA DO TRABALHO DE OSASCO /SP', document: null, juntoId: 56360, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '161fa3b1-e70f-4405-9e06-f6d54c85dfff', name: '4ª VARA DO TRABALHO DE PARAUAPEBAS/PA', document: null, juntoId: 56945, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '73e72078-7bcc-40ac-81fe-27b7316f6f99', name: '4ª VARA DO TRABALHO DE PASSO FUNDO/RS', document: null, juntoId: 56697, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '47197e77-17e7-49b5-b7bc-ab35b024b6b3', name: '4ª VARA DO TRABALHO DE PELOTAS/RS', document: null, juntoId: 56698, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9d3f9ddf-1097-4d37-8ef7-e611e1ca11df', name: '4ª VARA DO TRABALHO DE PONTA GROSSA/PR', document: null, juntoId: 57045, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4c2a86bc-a216-495e-b0ea-bb014dfdbd5b', name: '4ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56699, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '34688241-2a4a-44cb-9c49-69fdbd3ad93d', name: '4ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57223, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9b333e00-13e9-4aeb-8681-f010c5df6e43', name: '4ª VARA DO TRABALHO DE RIBEIRÃO PRETO/SP', document: null, juntoId: 57311, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '72913f59-56c3-47cd-9052-7c12e239be50', name: '4ª VARA DO TRABALHO DE RIO BRANCO/AC', document: null, juntoId: 57224, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5a32afb9-64c3-4a9d-8626-5575d0849f41', name: '4ª VARA DO TRABALHO DE RIO GRANDE/RS', document: null, juntoId: 56700, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dfe4260e-af5d-4540-870d-93e758dc82af', name: '4ª VARA DO TRABALHO DE RIO VERDE/GO', document: null, juntoId: 57440, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd59d764b-db6d-4f69-80c3-d0f786cc288c', name: '4ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56787, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2711e6e8-7012-44b5-9433-2fbaaa38fb70', name: '4ª VARA DO TRABALHO DE SANTO ANDRÉ /SP', document: null, juntoId: 56361, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2dd6c1ec-93b2-4e2b-9838-1616f6a474cc', name: '4ª VARA DO TRABALHO DE SANTOS /SP', document: null, juntoId: 56362, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '694f149b-0d0c-4e5a-971c-6c7280112257', name: '4ª VARA DO TRABALHO DE SÃO BERNARDO DO CAMPO  /SP', document: null, juntoId: 56363, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '071b3098-8525-4052-9740-ffcd957dd5c9', name: '4ª VARA DO TRABALHO DE SÃO GONÇALO/RJ', document: null, juntoId: 56205, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0281f4c9-d6eb-405e-bbc2-bde27da4338a', name: '4ª VARA DO TRABALHO DE SÃO JOSÉ DO RIO PRETO/SP', document: null, juntoId: 57312, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f5f46692-6953-4392-842b-aab3aa400ecd', name: '4ª VARA DO TRABALHO DE SÃO JOSÉ DOS CAMPOS/SP', document: null, juntoId: 57313, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'beec0105-d662-4f35-a2b0-01bd4c554b55', name: '4ª VARA DO TRABALHO DE SÃO JOSÉ DOS PINHAIS/PR', document: null, juntoId: 57046, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dfafab28-7ebe-4dae-91a0-5ab2970586da', name: '4ª VARA DO TRABALHO DE SÃO LEOPOLDO/RS', document: null, juntoId: 56701, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '36bed2c0-c1d7-43d0-b507-53766fc5a623', name: '4ª VARA DO TRABALHO DE SÃO LUÍS/MA', document: null, juntoId: 57611, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '262106a3-af7a-439f-a56a-a836f1dfe06c', name: '4ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56364, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cb21d4b4-b027-4ce8-a8c5-544a90c973af', name: '4ª VARA DO TRABALHO DE SOROCABA/SP', document: null, juntoId: 57314, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '39ebd94b-8a9f-4b61-af97-67a69286c6b7', name: '4ª VARA DO TRABALHO DE TAGUATINGA/DF', document: null, juntoId: 57086, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bde5fda5-1e3d-4dd6-9d92-ff0c324a9fcd', name: '4ª VARA DO TRABALHO DE TAQUARA/RS', document: null, juntoId: 56579, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b3d4c611-ce16-4cc0-a064-5bf328f45312', name: '4ª VARA DO TRABALHO DE TERESINA/PI', document: null, juntoId: 57519, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7175ba34-122e-43d8-a353-5423ac22d1e8', name: '4ª VARA DO TRABALHO DE UBERABA/MG', document: null, juntoId: 56565, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3f14f615-ada6-4035-82df-71882301b28e', name: '4ª VARA DO TRABALHO DE UBERLÂNDIA/MG', document: null, juntoId: 56566, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '13634444-a4de-48a1-b522-a4e4db998e54', name: '4ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57597, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '80cc75bb-2dcf-4ba3-88a0-1eef9af11df0', name: '4ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56857, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '11b4e1af-84b1-404f-91af-5c586e0527a9', name: '4ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56206, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0cbc198d-5f22-4dc4-ab36-81d96faa2201', name: '4ª VARA DO TRABALHO FLORIANÓPOLIS/SC', document: null, juntoId: 57178, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '91cbcb54-a7b2-4b24-8af5-b5f03fd76b94', name: '4ª VARA DO TRABALHO JOINVILLE/SC', document: null, juntoId: 57179, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dc03a0d4-b738-4b8f-b30d-c9dde8c2a317', name: '50ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56365, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c1ecec63-9280-4667-acb6-fd38355e11a8', name: '50ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56207, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7c296aa2-e1c3-45a5-8c5e-fdc65f769253', name: '51ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56366, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '111ec7b4-865a-4c9e-b82c-f9972dd1cfa8', name: '51ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56208, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1f0b3265-dcd2-47e6-a19d-821fb03f44f9', name: '52ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56367, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '743d7f3b-e2ea-4dc2-a70d-25f2c3396dee', name: '52ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56209, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e83bb735-6a37-436e-b12d-f90c7cf2b12b', name: '53ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56368, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'afc7031f-109f-4aaf-97f3-590af850c4e0', name: '53ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56210, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '71644978-d8e2-4527-aa53-095fdfee3c47', name: '54ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56369, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0b641879-de60-48b3-b37d-1070b29f4773', name: '54ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56211, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd92ed8c-6db6-4348-8ca7-e4731a93a92d', name: '55ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56370, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1014f6c3-0efd-4cca-8ec3-89c453c32b94', name: '55ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56212, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5479c10c-30f9-40c4-9200-4ecfd2b1d922', name: '56ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56371, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ed8dab79-db37-4e8e-8ead-d144867b5206', name: '56ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56213, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '08104398-a04b-4307-a72b-4becdda99db7', name: '57ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56372, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7644b9a4-d7a6-4833-8fe5-95c139f9d940', name: '57ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56214, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '167c6bfb-0540-4355-b0e8-94f9ae3f545d', name: '58ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56373, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b01e5457-7e11-4909-b5b8-b225efca7eb2', name: '58ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56215, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6e37225b-6057-43b9-8f86-5a85244bdfb3', name: '59ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56374, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b4326d4f-ad90-4870-adc5-2a3cebd25623', name: '59ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56216, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd8db2096-d8f5-4498-8991-fbbb11f5e4e3', name: '5ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57478, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'fc669a33-62c8-4edd-bd9c-fdfb76e7ac45', name: '5ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56946, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '967ab7a0-a8b7-485c-a717-438b200a266e', name: '5ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56567, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2f8d3aee-c3e5-4a04-a3a7-8a22a22bfabd', name: '5ª VARA DO TRABALHO DE BETIM/MG', document: null, juntoId: 56568, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4dd55540-0960-4544-a1ab-d2eab2b79eec', name: '5ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57087, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8b1c03d9-a88b-41da-87d8-51d7b05b499f', name: '5ª VARA DO TRABALHO DE CAMPINA GRANDE/PB', document: null, juntoId: 57205, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2979868a-bd25-4c51-a1d3-fe046614e711', name: '5ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57315, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '925e5dae-ab6b-4e3a-a388-67679ffbcc39', name: '5ª VARA DO TRABALHO DE CAMPO GRANDE/MS', document: null, juntoId: 57582, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4bdae1fa-326b-4167-ba85-0212098c3db9', name: '5ª VARA DO TRABALHO DE CANOAS/RS', document: null, juntoId: 56702, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7ada9e3d-0688-43e2-98f3-32345b8fa337', name: '5ª VARA DO TRABALHO DE CAXIAS DO SUL/RS', document: null, juntoId: 56703, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a3fcf4a8-1280-49f7-9e31-9f15ccbf4f3e', name: '5ª VARA DO TRABALHO DE CONTAGEM/MG', document: null, juntoId: 56569, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b805c1a0-1fba-4bc7-9cea-a5046176bddf', name: '5ª VARA DO TRABALHO DE CUBATÃO /SP', document: null, juntoId: 56274, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3dca9a0c-6228-48ca-abb5-5d119792f58d', name: '5ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57549, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b7a73afc-1169-45b7-b2f8-261249a6ebd5', name: '5ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57047, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8171c3db-2ecb-4391-979e-8fce21a7ab74', name: '5ª VARA DO TRABALHO DE DUQUE DE CAXIAS/RJ', document: null, juntoId: 56217, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '24ccfb0c-d164-4737-b72b-04112080d6a6', name: '5ª VARA DO TRABALHO DE FEIRA DE SANTANA/BA', document: null, juntoId: 56788, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4d9bea52-f940-465d-a626-ce4efc14e6c8', name: '5ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56891, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '652dc8cc-9c78-4244-9837-6356c4ef5b6f', name: '5ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57441, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '82a8ad2b-edc5-4880-bc0e-7ea22e87ed40', name: '5ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56375, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ba7f58b2-2c5c-44f7-8a7c-03f5004708dd', name: '5ª VARA DO TRABALHO DE JABOATÃO DOS GUARARAPES/PE', document: null, juntoId: 56858, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6d9cf4ba-9564-482f-9a01-8ea92b21d8aa', name: '5ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57206, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b32bf097-2eb9-46a7-b3e0-bd429605c1a2', name: '5ª VARA DO TRABALHO DE JUIZ DE FORA/MG', document: null, juntoId: 56570, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ae2a8f06-fb8d-428e-9540-c576f4d4f4aa', name: '5ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 57048, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0a9878c3-b0c8-4be5-97ff-4434672a0e13', name: '5ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56947, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a201a32f-9c31-427d-b294-2e10109cae67', name: '5ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57463, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1aa0db21-5aa0-405b-98ba-9e5e985fba13', name: '5ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57120, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e52a4c3-0cda-489b-8ec3-d1b77ce0ecb2', name: '5ª VARA DO TRABALHO DE MARINGÁ/PR', document: null, juntoId: 57049, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'de3deaa8-dd76-4b6e-a76a-4b716054ac3c', name: '5ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57501, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '33cf6912-0522-47d8-87bd-45088bd4c690', name: '5ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56218, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9c1c8d42-86a6-4e0f-8971-c2859622b64d', name: '5ª VARA DO TRABALHO DE NOVA IGUAÇU/RJ', document: null, juntoId: 56219, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cbdb67ef-dd56-4c41-ab98-7a8914757a9c', name: '5ª VARA DO TRABALHO DE NOVO HAMBURGO/RS', document: null, juntoId: 56704, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9a1635e8-dd5b-400b-8018-08be143888fa', name: '5ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56705, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b6258e44-d5dc-41c6-a8d0-4eae3400a12f', name: '5ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57225, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dd99c374-e973-4ab1-9684-844a62e2308b', name: '5ª VARA DO TRABALHO DE RIBEIRÃO PRETO/SP', document: null, juntoId: 57316, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5640ff99-e1d0-4bc0-bf63-8aa74d5d2cc0', name: '5ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56789, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c8fb6f28-bf5d-4f49-9fe3-d02f0b6fb2dd', name: '5ª VARA DO TRABALHO DE SANTOS /SP', document: null, juntoId: 56376, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bb4a83ad-05b2-4650-ae59-04d6379b4cc4', name: '5ª VARA DO TRABALHO DE SÃO BERNARDO DO CAMPO  /SP', document: null, juntoId: 56377, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2e3bc370-19e3-4c72-b6ee-4af9df380ea0', name: '5ª VARA DO TRABALHO DE SÃO GONÇALO/RJ', document: null, juntoId: 56220, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f6f87c9b-c5e9-4d15-853c-5ec675a36d3b', name: '5ª VARA DO TRABALHO DE SÃO JOSÉ DOS CAMPOS/SP', document: null, juntoId: 57317, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2ef7f212-caaf-45f2-9553-3a7d1ecb7b5e', name: '5ª VARA DO TRABALHO DE SÃO JOSÉ DOS PINHAIS/PR', document: null, juntoId: 57050, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '393ed725-8e8e-4b16-9d24-cdb79dffe68a', name: '5ª VARA DO TRABALHO DE SÃO LUÍS/MA', document: null, juntoId: 57612, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b11442fc-8fa3-412c-a813-117aee7a9c02', name: '5ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56378, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '718ee89e-b9a6-4843-87d7-7fb56976e231', name: '5ª VARA DO TRABALHO DE TAGUATINGA/DF', document: null, juntoId: 57088, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1864be6e-72fb-4f19-a63b-e7f91290e563', name: '5ª VARA DO TRABALHO DE UBERLÂNDIA/MG', document: null, juntoId: 56571, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c61cf3b0-ccd9-4dfe-a968-583147313a7f', name: '5ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57598, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '316fa5f1-01b4-4f9e-ab7b-b6402a655e52', name: '5ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56859, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3f3b6ec3-0693-4b6d-a201-3587662ddf4c', name: '5ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56221, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '335f1c13-a373-43f5-be2e-bd90ebb45acb', name: '5ª VARA DO TRABALHO FLORIANÓPOLIS/SC', document: null, juntoId: 57180, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3d2d1c8d-f205-476e-95b6-7bc0158601f7', name: '5ª VARA DO TRABALHO JOINVILLE/SC', document: null, juntoId: 57181, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4f400735-ffe9-4c45-97d2-489a9f4fe3a3', name: '60ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56379, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '03710977-6adb-45b4-a799-70bce5ce5875', name: '60ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56222, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '525c767c-141a-4f1d-ad50-57231c1d2a3f', name: '61ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56380, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e9267ff9-0794-4222-a911-885ad1ac7bc8', name: '61ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56223, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'edb3d623-09d3-4930-89bf-01f6bf06ba12', name: '62ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56381, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6c9493cf-1055-4a57-8c32-8d595e8504cf', name: '62ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56224, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '76c6c649-236a-4d92-b6ec-cb579e38364c', name: '63ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56382, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b4840c77-1482-4246-b34b-bf6ee9bf5561', name: '63ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56225, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '937d8c12-3528-4061-9be0-3d8c56562d54', name: '64ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56383, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '59afea9b-c572-4219-a826-bc899ce3b315', name: '64ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56226, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ddad2cbc-1b7a-453a-86c2-4e5f8679e16b', name: '65ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56384, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '029b3bc1-c3c6-42da-8e04-2c16d1339a96', name: '65ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56227, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '86f37f52-9277-48c4-b357-379f58460034', name: '66ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56385, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4ca7a201-18ef-4f96-9854-1bcf63269181', name: '66ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56228, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a04908c6-5efd-45c1-91df-12aecb16cc8e', name: '67ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56386, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '160816e2-c91f-4c06-84e8-8d9a3a012033', name: '67ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56229, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c31040d8-b7f2-4f7a-820c-8060945683d0', name: '68ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56387, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dd55f5e4-855a-40a5-b1ef-99481f5d15ff', name: '68ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56230, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9f2b0d0b-9550-4f91-8f5a-a836b2107604', name: '69ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56388, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '763811c3-f81c-40b0-bc89-3d336a9da936', name: '69ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56231, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a93b4f9f-f1a7-4dbf-a8e5-f110c73f0ae7', name: '6ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57479, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9abedb3f-4aaa-472b-b39f-1240ed40214c', name: '6ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56948, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'da1f875a-88d5-40c9-9485-7871ada3ee57', name: '6ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56572, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cfeb3f33-545c-4e39-8654-4ca015d5f064', name: '6ª VARA DO TRABALHO DE BETIM/MG', document: null, juntoId: 56573, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '88ad01b6-5271-4cf5-983f-a0a44452daff', name: '6ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57089, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'eed7cebe-6054-4f64-ac13-03790d0be46e', name: '6ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57318, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '99fd770f-a56b-4ace-acaf-1277b955bee8', name: '6ª VARA DO TRABALHO DE CAMPO GRANDE/MS', document: null, juntoId: 57583, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '018a8e52-2fb2-4716-a49c-4164b6a37947', name: '6ª VARA DO TRABALHO DE CAXIAS DO SUL/RS', document: null, juntoId: 56706, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8ffb182f-377c-4841-b616-c3415b0b7ee4', name: '6ª VARA DO TRABALHO DE CONTAGEM/MG', document: null, juntoId: 56574, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '49ace3a5-3bcc-4951-b48c-33fda0612f1b', name: '6ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57550, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a3e9c851-2e48-4ed7-9d29-54c1e6ad3a88', name: '6ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57051, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e1b5834b-6a42-4cab-be1a-97775ec5d0f5', name: '6ª VARA DO TRABALHO DE DUQUE DE CAXIAS/RJ', document: null, juntoId: 56232, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5cddd167-a0c8-4eb0-9eaa-d3240e7571f3', name: '6ª VARA DO TRABALHO DE FEIRA DE SANTANA/BA', document: null, juntoId: 56790, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3eff2caa-a234-409a-a851-0fb7320f3fee', name: '6ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56892, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0c98fca9-538b-4fd0-bfbc-6e2feeb38249', name: '6ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57442, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '68f69da4-48a3-4418-a1b2-ac061bb04a68', name: '6ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56390, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7804e116-69b6-47a9-be98-fcba7e76ff4f', name: '6ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57207, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2f05144d-24ec-4da8-bea7-9addffbc5804', name: '6ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 57052, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '44d9b0e1-0ad9-4830-8938-ebdf38859cf7', name: '6ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56949, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c23f2145-53af-4627-8473-e0430ccafd22', name: '6ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57464, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4d802507-39f8-48f8-86b0-79645d90480e', name: '6ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57121, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a00b49de-c2ca-471b-86a5-0a209ecefdf4', name: '6ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57502, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '245824a1-d968-40e6-896d-e1b1409728d7', name: '6ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56233, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9f6911bf-aa09-40a4-9cbe-8bbf487e36b4', name: '6ª VARA DO TRABALHO DE NOVA IGUAÇU/RJ', document: null, juntoId: 56234, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '54284e98-873d-403b-ae1f-1d62a715f917', name: '6ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56707, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c4ef500a-0da0-403a-adbd-e07c0ef419cd', name: '6ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57226, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '36d79d2b-15a6-44c0-ba69-61fd299fc7af', name: '6ª VARA DO TRABALHO DE RIBEIRÃO PRETO/SP', document: null, juntoId: 57319, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '000b4dcd-fcff-4691-8286-708d93abe260', name: '6ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56791, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '040eb71f-a2b3-4c9d-acde-8adf49429ac4', name: '6ª VARA DO TRABALHO DE SANTOS /SP', document: null, juntoId: 56391, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '544dec17-43ab-41af-b774-027e3a8c777c', name: '6ª VARA DO TRABALHO DE SÃO BERNARDO DO CAMPO /SP', document: null, juntoId: 56389, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2f28e99d-800e-47aa-af2f-4f47d66880e3', name: '6ª VARA DO TRABALHO DE SÃO GONÇALO/RJ', document: null, juntoId: 56235, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '011bee32-eeb3-454f-bbfb-162c6d17084a', name: '6ª VARA DO TRABALHO DE SÃO LUÍS/MA', document: null, juntoId: 57613, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '554c9718-c4b6-4043-8d39-3919d3d0a91c', name: '6ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56392, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f93332a4-b5d0-44b2-b190-d935b2814eeb', name: '6ª VARA DO TRABALHO DE UBERLÂNDIA/MG', document: null, juntoId: 56575, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f5ffddce-eeef-40be-96ac-4f8bbbf16103', name: '6ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57599, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3df0e4b2-755f-495b-a60f-bb18421fd893', name: '6ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56860, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '34891a45-13ed-4a26-a6fa-1ae3fd2dac45', name: '6ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56236, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4569628c-fc9b-4b83-86a4-d4e55e2d83fa', name: '6ª VARA DO TRABALHO FLORIANÓPOLIS/SC', document: null, juntoId: 57182, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ad6da103-5afb-46a6-95ea-b46ef80af4e3', name: '70ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56393, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1f0c7749-8a36-4252-bf55-372b1c4b5c6d', name: '70ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56237, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2b997d3a-e2c8-4046-a25d-e7194e0e056b', name: '71ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56394, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'aae07d55-39a1-4525-a602-39636fb1f2e1', name: '71ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56238, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd1f74b61-b0ea-407a-8863-2c18ee001b08', name: '72ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56395, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '59a4de88-450b-4d0b-bb68-711b62fbfd0d', name: '72ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56239, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '15237e76-4737-4d54-9bc4-b48c8c707518', name: '73ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56396, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6ffa9a1d-eb10-43ab-a497-a7d2b08a2e8e', name: '73ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56240, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e4dba3e-c5aa-4025-8492-648cb0fb93f8', name: '74ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56397, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b5fb0e05-8caf-4f36-828c-0d471c5b2286', name: '74ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56241, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7992bbc4-575b-4de5-96e2-6a8d52aea2c9', name: '75ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56398, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c28d2403-1cb5-48a3-acdc-0195515d5d9c', name: '75ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56242, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '9079f23c-be11-4318-96f3-5884ac5347fa', name: '76ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56399, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '50703cdd-f73e-48be-8cd4-47e56179e867', name: '76ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56243, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '437661e9-be3b-4bfa-94dd-3977f0ee3383', name: '77ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56400, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3a9359fa-49f3-4429-a160-1276ee0338be', name: '77ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56244, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2d5bebdc-d780-4551-9953-447907eb083a', name: '78ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56401, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '24ebf331-eb46-4c05-9495-adc06acff5fb', name: '78ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56245, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'aebe7482-8e18-47f5-9a83-e0548067fb5b', name: '79ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56402, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '917499bb-9b68-46e5-810b-9d05d9e3a485', name: '79ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56246, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c5242f71-6f73-4770-8147-ce4fbe693efe', name: '7ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57480, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '70471ecd-a63e-41a9-a39f-0ab5acc414e1', name: '7ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56950, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'cd106e73-5b39-4108-ba0f-1b1ed724b747', name: '7ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56576, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'be88392a-ce5e-4990-8180-371925eb01f8', name: '7ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57090, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f71330e5-e085-4153-92c4-c251a946090c', name: '7ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57320, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd137cdee-1fda-4fa5-844c-ee85336e90a9', name: '7ª VARA DO TRABALHO DE CAMPO GRANDE/MS', document: null, juntoId: 57584, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd732a19e-ddb8-4759-9a96-d591baa43960', name: '7ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57551, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd2e2eca8-4c00-4d49-a044-5dc40f6f97d3', name: '7ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57053, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2647723d-8bf2-4cf9-a828-1f9d5fc8fa86', name: '7ª VARA DO TRABALHO DE DUQUE DE CAXIAS/RJ', document: null, juntoId: 56247, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'ec14e1f4-2620-4d9c-ba64-38227423df12', name: '7ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56893, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0be1f79f-45c3-46b5-8ff3-68b0730da8f6', name: '7ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57443, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6655bd36-cb1d-4d25-8571-4694c01eb8d3', name: '7ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56403, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f86bd667-b3d6-46ec-a6c4-6122360761db', name: '7ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57208, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '109b350d-8f7e-4502-beba-4faae76a4f19', name: '7ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 57054, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e6e624c2-f743-4b4a-ba56-18aed18b30eb', name: '7ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56951, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2716b359-6b47-4c95-934a-06dc379c9a25', name: '7ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57465, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3234de03-6d8c-4418-975f-2dd32bb8fbc3', name: '7ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57122, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bca985b0-4014-4d51-a6a4-cc604610f592', name: '7ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57503, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1b788841-c703-4a6c-aefa-c7e6b68dd9ab', name: '7ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56248, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '42613788-6032-4252-b812-3bf7ad649374', name: '7ª VARA DO TRABALHO DE NOVA IGUAÇU/RJ', document: null, juntoId: 56249, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6bc4e188-5b5c-4548-bc13-29098a0ae382', name: '7ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56708, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '00439e9f-7720-4ded-a96b-97130bd95b6f', name: '7ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57227, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '15033bcb-5bbc-48cf-8034-a5d03d130215', name: '7ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56792, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4ab628ee-a3e6-46e1-8d7d-e04792bb0e85', name: '7ª VARA DO TRABALHO DE SANTOS /SP', document: null, juntoId: 56404, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '52f6c351-0336-4843-a93b-9f8611169e09', name: '7ª VARA DO TRABALHO DE SÃO LUÍS/MA', document: null, juntoId: 57614, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e0a0454f-00eb-405c-85f1-1b914e554bbd', name: '7ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56405, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a7e1d896-3bf9-4da3-8204-843a85277874', name: '7ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57600, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '22fc1af7-89f5-4f57-97e8-d8f2d31f4c68', name: '7ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56861, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b3f83711-4904-4fb9-8b1d-7e1aae2b3e51', name: '7ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56250, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0a035da6-26dc-40e1-8139-f66fdf57a94f', name: '7ª VARA DO TRABALHO FLORIANÓPOLIS/SC', document: null, juntoId: 57183, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4cd719f0-8778-4b3e-b2ed-02dcc23fffe9', name: '80ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56406, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd4a04b7a-e7e0-4c10-a6a9-1b8f28018d2b', name: '80ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56251, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f9771b73-3554-47b4-b241-50393ba573cc', name: '81ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56407, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '57f95ab8-db5d-4801-a5fa-e77e4bb77694', name: '81ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56252, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4290add5-adf0-4a7f-8f7a-a0498c5a5d95', name: '82ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56408, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '4e7b6904-110b-419c-b784-3e83bae0fecf', name: '82ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56253, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b9dc3285-0e6e-47cf-a0a3-08166dac1ff7', name: '83ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56409, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '32fda290-59ef-4dba-8d17-fc8b8f041db6', name: '84ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56410, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'd117283b-496f-4fa2-9770-5bb7ebfc22c9', name: '85ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56411, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a01b3e05-6e43-4f75-8575-fa6176c506d4', name: '86ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56412, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'adced78f-1e1e-40a2-b0ea-cffaec64bf2c', name: '87ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56413, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '39250c42-ff13-411c-9eb4-36497c182475', name: '88ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56414, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '24a28bc6-dccb-49fc-a453-d5728e2cdec5', name: '89ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56415, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b66a0cb7-3348-4f45-a225-339d29f692f0', name: '8ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57481, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2e38fc90-3e51-4a7e-9496-51ea958b90f2', name: '8ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56952, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '394d0757-848e-483c-952d-4bd4c1b298af', name: '8ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56577, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '05ddfba8-ea8c-412f-a4ef-c7fb594d6ee4', name: '8ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57091, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'bcf5696c-e2be-4419-96f3-306fcffb6735', name: '8ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57321, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e61f0fec-2638-4d33-8ade-f7894e8e921c', name: '8ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57552, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '982425d3-3c6d-4535-bd4d-39105a7ea165', name: '8ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57055, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2906db74-eb90-4fdd-91d3-ce1f829da604', name: '8ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56894, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0385833d-96da-44b3-95c2-ac1f16be4c5b', name: '8ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57444, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '944aa8dd-817e-47cd-8362-cfae6fd3d378', name: '8ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56416, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '017314d0-dbe4-4332-815f-55441c808778', name: '8ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57209, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3ddfc88d-0aa2-4e62-adb3-d755781e1515', name: '8ª VARA DO TRABALHO DE LONDRINA/PR', document: null, juntoId: 57056, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'b266ab4f-dc5f-4226-a7ae-ec911e6d17b3', name: '8ª VARA DO TRABALHO DE MACAPÁ/AP', document: null, juntoId: 56953, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'de18e59d-d3e4-4a7c-a083-416191594862', name: '8ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57466, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a5ba7081-c15b-471a-8120-9afbeb9c3497', name: '8ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57123, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dbc83cee-b5f7-43dc-a767-f45d1d2e50c6', name: '8ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57504, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2b2c5721-0563-4f86-9a5d-12e3e791bad9', name: '8ª VARA DO TRABALHO DE NITERÓI/RJ', document: null, juntoId: 56254, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '49e67f7a-aa66-4480-b362-3f31102fb7fc', name: '8ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56709, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0e738213-4143-45cf-9f2f-0289eb6b7739', name: '8ª VARA DO TRABALHO DE PORTO VELHO/RO', document: null, juntoId: 57228, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a47dc5d6-6081-42c4-8371-7b81562a2fc1', name: '8ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56793, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '0caa4f9c-aa66-4b42-b074-ebbe8a87dbfd', name: '8ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56417, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6b016751-e915-4785-b669-2f65ca50a853', name: '8ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57601, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '524ee768-d595-4a67-ac30-a2346bd7bf91', name: '8ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56862, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '46935c88-24d0-4266-9300-ecaf296c2b55', name: '8ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56255, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1010ff1e-63fc-4213-ae07-06f935425fb3', name: '90ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56418, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '35a07f2e-a2be-4e5e-889f-7207d916b252', name: '9ª VARA DO TRABALHO DE ARACAJU/SE', document: null, juntoId: 57482, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '8663f92b-b825-4fc7-b903-aa8c41d65872', name: '9ª VARA DO TRABALHO DE BELÉM/PA', document: null, juntoId: 56954, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '82591d6f-b883-45f2-8035-df2a790ffc0f', name: '9ª VARA DO TRABALHO DE BELO HORIZONTE/MG', document: null, juntoId: 56578, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1b3d7e36-9e58-4e12-a697-0946a61d08fc', name: '9ª VARA DO TRABALHO DE BRASÍLIA/DF', document: null, juntoId: 57092, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '5dd4c74b-5793-4b38-819c-ad88b050c5ab', name: '9ª VARA DO TRABALHO DE CAMPINAS/SP', document: null, juntoId: 57322, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '3e115348-8591-4172-a0bd-5df3356556ba', name: '9ª VARA DO TRABALHO DE CUIABÁ/MT', document: null, juntoId: 57553, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '065059f4-304b-467f-b630-1f033efa96cc', name: '9ª VARA DO TRABALHO DE CURITIBA/PR', document: null, juntoId: 57057, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'a7e2dd86-ecfe-43fa-820c-e410e84e451f', name: '9ª VARA DO TRABALHO DE FORTALEZA/CE', document: null, juntoId: 56895, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '7e286ac3-0da6-4749-bbf3-4001627be71c', name: '9ª VARA DO TRABALHO DE GOIÂNIA/GO', document: null, juntoId: 57445, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'dc1c7b7a-d890-4975-8f3f-131865369435', name: '9ª VARA DO TRABALHO DE GUARULHOS /SP', document: null, juntoId: 56419, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2f2fecc9-2363-40f5-9216-f5937aac0cc3', name: '9ª VARA DO TRABALHO DE JOÃO PESSOA/PB', document: null, juntoId: 57210, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'f7fe961c-abf9-467f-988a-1855995f64fd', name: '9ª VARA DO TRABALHO DE MACEIÓ/AL', document: null, juntoId: 57467, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '93478b48-4a40-4441-b22b-4185e96c63cf', name: '9ª VARA DO TRABALHO DE MANAUS/AM', document: null, juntoId: 57124, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '46ff078a-246b-4d7e-b719-cf5d03748511', name: '9ª VARA DO TRABALHO DE NATAL/RN', document: null, juntoId: 57505, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '2330769b-4cfc-4e18-aa64-fe936f6be70a', name: '9ª VARA DO TRABALHO DE PORTO ALEGRE/RS', document: null, juntoId: 56710, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'e2ab6c4e-1db0-40a3-8b39-07879a39c7f9', name: '9ª VARA DO TRABALHO DE SALVADOR/BA', document: null, juntoId: 56794, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: 'c85e098f-4bfd-4764-af74-8b57ff6bda51', name: '9ª VARA DO TRABALHO DE SÃO PAULO /SP', document: null, juntoId: 56420, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '1be8e674-cc2c-4764-b82c-6f53a65e676d', name: '9ª VARA DO TRABALHO DE VITÓRIA/ES', document: null, juntoId: 57602, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '59e70b49-2233-4867-8923-ac8982d36c79', name: '9ª VARA DO TRABALHO DO RECIFE/PE', document: null, juntoId: 56863, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '29b6e9c9-ff62-4e5b-b506-63cf1a291138', name: '9ª VARA DO TRABALHO DO RIO DE JANEIRO/RJ', document: null, juntoId: 56256, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}, {
  id: '6eca9a5e-3214-4b13-8600-1089169214b7', name: 'VARA DO TRABALHO DE PALHOÇA/SC', document: null, juntoId: 57184, active: true, isLabour: true, createdAt: '2021-02-22T14:01:30.000Z', updatedAt: '2021-02-22T14:01:30.000Z', deletedAt: null,
}];

const HomePage = () => {
  // const [check, setCheck] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { inputs, setValues } = useForm<{ description: string, insurerValue: string}>({
    initialValues: { description: '', insurerValue: '' },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <MainWrap>
      <Autocomplete
        label="Teste"
        {...inputs.description}
        options={[
          { value: '1', description: 'meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto' },
          { value: '2', description: 'meu novo ventilador' },
          { value: '3', description: 'meu novo teto' },
          { value: '4', description: 'minha nova televisão' },
          { value: '5', description: 'meu nova televisão' },
          { value: '6', description: 'meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto' },
          { value: '7', description: 'meu novo ventilador' },
          { value: '8', description: 'meu novo teto' },
          { value: '9', description: 'minha nova televisão' },
          { value: '10', description: 'meu nova televisão' },
          { value: '11', description: 'meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto' },
          { value: '12', description: 'meu novo ventilador' },
          { value: '13', description: 'meu novo teto' },
          { value: '14', description: 'minha nova televisão' },
          { value: '15', description: 'meu nova televisão' },
          { value: '16', description: 'meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto meu novo ventilador de teto' },
          { value: '17', description: 'meu novo ventilador' },
          { value: '18', description: 'meu novo teto' },
          { value: '19', description: 'minha nova televisão' },
          { value: '20', description: 'meu nova televisão' },
        ]}
      />
      <Input
        label="Importância segurada"
        mask="money"
        {...inputs.insurerValue}
      />
    </MainWrap>
  );
};

export default HomePage;
