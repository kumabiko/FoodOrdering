import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { Link, useSegments } from "expo-router";

import Colors from "../constants/Colors";
import { Product } from "../types";
import { defaultPizzaImage } from "@/constants/Images";

type Props = {
  product: Product;
};

export const ProductListItem = ({ product }: Props) => {
  const segments = useSegments();

  return (
    <Link href={`${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{
            uri: product.image || defaultPizzaImage,
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginTop: "auto",
  },
});
