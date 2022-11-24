import { Modal, FlatList } from 'react-native';
import { Product as ProductProps } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import {
  Image,
  CloseButton,
  Header,
  ModalBody,
  IgredientsContainer,
  Ingredient,
  FooterContainer,
  Footer,
  PriceContainer
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: ProductProps | null;
  onAddToCart: (product: ProductProps) => void;
}

export function ProductModal({ visible, onClose, product, onAddToCart }: ProductModalProps) {

  if(!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image source={{
        uri: `http://192.168.0.116:3001/uploads/${product.imagePath}`,
      }}>

        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>
      <ModalBody>
        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>
        {product.ingredients.length > 0 &&
          <IgredientsContainer>
            <Text color="#666" weight="600">Ingredientes</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              data={product.ingredients}
              keyExtractor={ingredients => ingredients._id}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IgredientsContainer>
        }
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button onPress={handleAddToCart}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}

