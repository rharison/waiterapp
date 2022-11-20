import { Modal, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Overlay, ModalBody, Header, Form, Input, ButtonClose } from './styles';
import { Platform } from 'react-native';
import { useState } from 'react';

const isAndroid = Platform.OS === 'android';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function hadleSave() {
    onSave(table);
    setTable('');
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <ButtonClose onPress={onClose}>
              <Close color="#666" />
            </ButtonClose>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType='number-pad'
              onChangeText={setTable}
            />
            <Button disabled={!table} onPress={hadleSave}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
