import { Ionicons } from "@expo/vector-icons";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Spacing } from "styles/index";
import { moderateScale } from "utils/styles";

const DropdownPicker = ({ 
    visible, 
    onClose, 
    data, 
    onSelect, 
    title 
  }: {
    visible: boolean;
    onClose: () => void;
    data: Array<{label: string; value: string; key: string}>;
    onSelect: (value: string) => void;
    title: string;
  }) => (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  onSelect(item.value);
                  onClose();
                }}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );

  const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
      },
      modalContent: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        maxHeight: '70%',
        paddingBottom: Spacing.vertical.size20,
      },
      modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.horizontal.size20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
      },
      modalTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: Colors.black,
      },
      dropdownItem: {
        paddingHorizontal: Spacing.horizontal.size20,
        paddingVertical: Spacing.vertical.size16,
        borderBottomWidth: 1,
        borderBottomColor: `${Colors.gray}30`,
      },
      dropdownItemText: {
        fontSize: moderateScale(16),
        color: Colors.black,
      },
  })
  export default DropdownPicker;