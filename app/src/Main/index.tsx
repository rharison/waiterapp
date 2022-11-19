import { Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';


export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  return (
    <>
      <Container>
        <Header/>

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable &&
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
          }
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
