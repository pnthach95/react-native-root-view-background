import { useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Context } from '../context';
import type { ScreenProps } from '../typings';

const Screen = ({ navigation }: ScreenProps) => {
  const { dispatch } = useContext(Context);
  const { colors } = useTheme();
  const primary = { backgroundColor: colors.primary };
  const canGoBack = navigation.canGoBack();
  const goBack = () => navigation.goBack();
  const goNext = () => navigation.push('screen');
  const onSwitch = () => dispatch({ type: 'SWITCH_THEME' });

  return (
    <>
      <View style={styles.center}>
        {canGoBack && (
          <>
            <TouchableOpacity onPress={goBack} style={[primary, styles.button]}>
              <Text style={styles.whiteText}>Go back</Text>
            </TouchableOpacity>
            <View style={styles.space} />
          </>
        )}
        <TouchableOpacity onPress={onSwitch} style={[primary, styles.button]}>
          <Text style={styles.whiteText}>Switch theme</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity onPress={goNext} style={[primary, styles.button]}>
          <Text style={styles.whiteText}>Next screen</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={{ color: colors.text }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          interdum ex quis facilisis molestie. Donec nec molestie velit, vitae
          consectetur metus. Sed rhoncus auctor felis, vitae pulvinar magna
          faucibus sit amet. Nam dictum ac nisl vel posuere. Nullam fermentum
          dictum tristique. Aliquam mi enim, fermentum sed urna et, vulputate
          suscipit nulla. Cras dapibus pretium odio non finibus. Donec volutpat
          condimentum libero, vel tempus nisl faucibus eget. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nam nulla lacus, convallis non tincidunt vel, egestas non nisl.
          Ut augue erat, congue id orci at, tincidunt consectetur sem.
          Vestibulum porttitor vestibulum velit, et fringilla sem eleifend
          dictum. Sed sem velit, varius non mauris at, pellentesque pellentesque
          mauris. Nullam quis sapien sed tellus varius tincidunt sit amet at
          ligula. Praesent vel ligula rutrum tellus efficitur porta ut quis
          velit. Quisque sit amet justo vel justo ultrices interdum. Praesent id
          ante vehicula, condimentum leo egestas, sodales nibh. Donec a quam
          dolor. Duis feugiat sapien vitae scelerisque dapibus. Pellentesque
          porttitor volutpat lacinia. Integer vestibulum nisi non erat finibus,
          sed euismod nisi rutrum. Etiam dapibus augue eget augue convallis, id
          gravida leo lobortis. Cras tortor turpis, sagittis non massa et,
          euismod facilisis eros. Maecenas faucibus facilisis rutrum. Nam tellus
          velit, viverra vulputate lacus quis, placerat eleifend dolor. In vitae
          tincidunt leo, ac molestie purus. Vivamus at auctor felis, eget rutrum
          tortor. Suspendisse non sollicitudin dolor. Fusce in urna et dolor
          auctor dictum. Nam tempus, mauris vel pulvinar congue, ipsum lorem
          placerat justo, in scelerisque libero lacus tincidunt urna. Vivamus
          libero lacus, semper a tincidunt sollicitudin, bibendum vel mauris.
          Donec ante augue, volutpat in malesuada sit amet, placerat in nunc.
          Mauris at ipsum ac nulla ornare luctus. Praesent luctus viverra ipsum,
          id cursus ipsum eleifend eget. Fusce posuere diam ut odio laoreet
          ultricies. Morbi mollis, dolor in porta vestibulum, velit quam
          pharetra dolor, vel rutrum nunc libero vitae turpis. Phasellus laoreet
          a sapien eget mollis. Ut scelerisque, mauris non vulputate facilisis,
          felis lectus cursus lectus, et lacinia felis purus blandit eros. Nam
          at leo magna. Donec imperdiet nisl nec nisi sagittis interdum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
          nisi quis enim pellentesque rhoncus varius eget diam. Vestibulum sit
          amet sodales mauris. Praesent in blandit sapien, at imperdiet dui.
          Cras hendrerit felis eu diam commodo aliquam. Vestibulum viverra ipsum
          luctus, varius leo quis, rhoncus lacus. Nunc in feugiat felis, quis
          tempor augue. Quisque tellus libero, vehicula in quam non, blandit
          tincidunt elit. Etiam pellentesque aliquam diam non ultricies. Nam
          ornare enim eu elit tempor, a tristique sem iaculis. Proin nec augue
          et risus pulvinar bibendum. Donec facilisis eleifend ligula at semper.
          Nulla porttitor enim at ex imperdiet efficitur. Cras sit amet quam nec
          enim scelerisque dignissim. Nunc nisi metus, condimentum nec tristique
          a, laoreet at sem. Proin sit amet vehicula augue, et condimentum
          tortor. Suspendisse rhoncus a nibh ut bibendum. Mauris lobortis
          viverra erat, a bibendum leo commodo ut. Nulla sit amet quam
          condimentum, blandit neque sit amet, tristique sem. Curabitur id nibh
          ex. Curabitur at convallis tortor, vel tempor arcu. Maecenas finibus
          interdum ipsum. Fusce feugiat finibus facilisis. Aenean vehicula nisl
          at massa commodo mollis viverra in magna. Donec quis lorem lobortis
          velit blandit sagittis vel ac turpis. Integer sagittis ex et
          consectetur gravida. Etiam bibendum elementum dignissim. Donec ac
          lacus id erat malesuada vestibulum sed sit amet dui. Ut molestie
          elementum arcu vitae venenatis. Morbi ut ullamcorper magna. Mauris ut
          dui sed lorem lobortis condimentum quis nec risus. Proin sed dolor et
          lacus venenatis malesuada. Pellentesque in viverra lorem, id rhoncus
          ex. Duis a diam mattis, interdum sem vitae, malesuada justo. Integer
          ac finibus lectus. Maecenas id dolor ex. Vestibulum pulvinar molestie
          odio id faucibus. Etiam vitae arcu laoreet, elementum ante a, porta
          ligula. Nam tristique viverra enim id maximus. Morbi pellentesque
          varius est vitae blandit. Mauris vitae dolor euismod nulla imperdiet
          dignissim sed non ipsum. Nullam vel eros lectus. Donec ullamcorper at
          ante sit amet placerat. Aenean venenatis porta nibh. Nunc imperdiet id
          elit eu interdum. Aliquam eget bibendum magna. Fusce sit amet mollis
          nibh. Donec bibendum pellentesque scelerisque. Donec bibendum, mi a
          mollis interdum, mauris leo dignissim felis, sed varius augue purus
          vitae nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Cras tempor, leo et accumsan
          vulputate, ante dui efficitur justo, eget pellentesque tellus urna a
          eros. Aliquam erat volutpat. Nullam ante est, dignissim non
          scelerisque id, porttitor quis sapien. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Mauris
          ultrices velit sed ex tempor, vel egestas nunc finibus. Sed vel dui
          efficitur, ullamcorper lacus eget, ornare turpis. Aliquam efficitur
          nisi id quam cursus dapibus. Nullam placerat ligula est, a euismod
          velit fringilla in. Vivamus porta ut massa in sollicitudin. Morbi eget
          tristique arcu. Phasellus nec eros eu elit molestie aliquam ut nec
          risus. Pellentesque lobortis augue vel libero fringilla gravida.
          Aenean feugiat molestie fermentum. Duis et luctus risus, a mattis
          metus. Nulla mattis vehicula leo nec ultrices. Donec consequat, mi a
          volutpat consequat, massa lorem lacinia sem, sit amet varius nulla
          ligula in tellus. Maecenas venenatis sapien ut ex rutrum aliquet.
          Vestibulum ipsum augue, commodo a sem sit amet, bibendum pulvinar
          nunc. Pellentesque quis gravida ipsum. Vestibulum porta massa in
          pulvinar dignissim. Mauris tincidunt ex ut felis commodo, malesuada
          suscipit libero pulvinar. Ut lorem lectus, rhoncus quis vehicula nec,
          congue eu lorem. Aliquam erat volutpat. Quisque ut feugiat libero.
        </Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  space: {
    height: 20,
  },
  whiteText: {
    color: 'white',
  },
});

export default Screen;
