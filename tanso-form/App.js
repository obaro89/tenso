import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomInput from "./src/component/customInput/CustomInput";
import CustomButton from "./src/component/customButton/CustomButtom";
import colors from "./src/component/colors/colors";
import CustomSelectInput from "./src/component/customSelectInput/CustomSelectInput";

//firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from "./src/firebase/firebase";

export default function App() {
  const [gender, setGender] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [error, setError] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleError = (error, input) => {
    setError((prevState) => ({ ...prevState, [input]: error }));
  };

  React.useEffect(() => {
    if (gender) {
      handleError(null, "gender");
    }
  }, [gender]);

  const data = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
  ];

  const validateInput = () => {
    Keyboard.dismiss();
    let isErrorFree = true;

    if (!gender || gender == null) {
      handleError("Please select a gender", "gender");
      isErrorFree = false;
    }
    if (name.trim() === "" || name.trim().length < 3) {
      handleError("Name must be atleast 3 characters long.", "name");
      isErrorFree = false;
    }
    if (address.trim() === "" || address.trim().length < 10) {
      handleError("Address must be atleast 10 characters long.", "address");
      isErrorFree = false;
    }

    if (!phone || typeof parseInt(phone) !== "number" || phone.length !== 10) {
      handleError("Phone must be atleast 10 digits long.", "phone");
      isErrorFree = false;
    }

    if (isErrorFree) {
      handleSubmitForm();
      clearState();
    }
  };

  const clearState = () => {
    setAddress("");
    setGender("");
    setName("");
    setPhone("");
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      const docRef = await addDoc(collection(db, "tanso-form"), {
        name,
        address,
        phone: Number(phone),
        gender,
      });
      setIsLoading(false);
      Alert.alert("Data was saved successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>TANSO FORM</Text>
        <View style={styles.viewInput}>
          <CustomInput
            name="name"
            placeholder="Name"
            value={name}
            onChangeText={setName}
            error={error.name}
            onFocus={() => handleError(null, "name")}
          />
        </View>
        <View style={styles.viewInput}>
          <CustomInput
            name="phone"
            placeholder="Phone"
            keyboardType="number-pad"
            returnKeyType="done"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
            error={error.phone}
            onFocus={() => handleError(null, "phone")}
          />
        </View>
        <View style={styles.viewInput}>
          <CustomInput
            name="address"
            placeholder="Address"
            multiline
            value={address}
            onChangeText={setAddress}
            error={error.address}
            onFocus={() => handleError(null, "address")}
          />
        </View>

        <View style={styles.select}>
          <CustomSelectInput
            items={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            setSelected={setGender}
            placeholder={{ label: "Gender" }}
            error={error.gender}
          />
        </View>

        <CustomButton
          onPress={validateInput}
          title={isLoading ? "Processing..." : "Submit"}
          disabled={isLoading}
        />
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 15,
  },

  viewInput: {
    height: 60,
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    borderRadius: 5,
  },
  select: {
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 0,
    height: 60,
    padding: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#39CCCC",
    marginVertical: 20,
  },
});
