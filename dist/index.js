var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            },
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
define('components/Icon', [
  'require',
  'exports',
  '@expo/vector-icons',
  'react',
  'react-native',
], function (require, exports, vector_icons_1, react_1, react_native_1) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.Icon = void 0
  react_1 = __importDefault(react_1)
  function Icon({ text, iconID, color }) {
    return (
      <react_native_1.View style={styles.container}>
        {iconID === 'x' ? (
          <vector_icons_1.Feather name={iconID} size={26} color={color} />
        ) : (
          <vector_icons_1.MaterialIcons name={iconID} size={26} color={color} />
        )}
        <react_native_1.Text style={styles.text}>{text}</react_native_1.Text>
      </react_native_1.View>
    )
  }
  exports.Icon = Icon
  const styles = react_native_1.StyleSheet.create({
    container: {
      height: 64,
      width: 80,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
    },
    text: {
      color: '#fff',
      textAlign: 'center',
    },
  })
})
define('components/IconButton', [
  'require',
  'exports',
  'react-native',
  'components/Icon',
], function (require, exports, react_native_2, Icon_1) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.IconButton = void 0
  function IconButton({ text, iconID, color, ...buttonProps }) {
    return (
      <react_native_2.TouchableOpacity {...buttonProps}>
        <Icon_1.Icon text={text} iconID={iconID} color={color} />
      </react_native_2.TouchableOpacity>
    )
  }
  exports.IconButton = IconButton
})
define('context/editor', ['require', 'exports', 'react'], function (
  require,
  exports,
  react_2,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.EditorContext = void 0
  exports.EditorContext = (0, react_2.createContext)({})
})
define('Store', ['require', 'exports', 'recoil'], function (
  require,
  exports,
  recoil_1,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.editorOptionsState =
    exports.isEditState =
    exports.editingModeState =
    exports.cropSizeState =
    exports.accumulatedPanState =
    exports.processingState =
    exports.readyState =
    exports.imageBoundsState =
    exports.imageScaleFactorState =
    exports.imageDataState =
      void 0
  exports.imageDataState = (0, recoil_1.atom)({
    key: 'imageDataState',
    default: {
      uri: '',
      width: 0,
      height: 0,
    },
  })
  exports.imageScaleFactorState = (0, recoil_1.atom)({
    key: 'imageScaleFactorState',
    default: 1,
  })
  exports.imageBoundsState = (0, recoil_1.atom)({
    key: 'imageBoundsState',
    default: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  })
  exports.readyState = (0, recoil_1.atom)({
    key: 'readyState',
    default: false,
  })
  exports.processingState = (0, recoil_1.atom)({
    key: 'processingState',
    default: false,
  })
  exports.accumulatedPanState = (0, recoil_1.atom)({
    key: 'accumulatedPanState',
    default: {
      x: 0,
      y: 0,
    },
  })
  exports.cropSizeState = (0, recoil_1.atom)({
    key: 'cropSizeState',
    default: {
      width: 0,
      height: 0,
    },
  })
  exports.editingModeState = (0, recoil_1.atom)({
    key: 'editingModeState',
    default: 'crop',
  })
  exports.isEditState = (0, recoil_1.atom)({
    key: 'isEditState',
    default: false,
  })
  exports.editorOptionsState = (0, recoil_1.atom)({
    key: 'editorOptions',
    default: {
      backgroundColor: '#222',
      overlayCropColor: '#33333355',
      gridOverlayColor: '#ffffff88',
      coverMarker: {
        show: true,
        color: '#fff',
      },
      controlBar: {
        position: 'top',
        height: 80,
        backgroundColor: '#333',
        backButton: {
          color: '#fff',
          iconName: 'arrow-back',
          text: 'Back',
        },
        cropButton: {
          color: '#fff',
          iconName: 'crop',
          text: 'Crop',
        },
        saveButton: {
          color: '#fff',
          iconName: 'done',
          text: 'Save',
        },
        cancelButton: {
          color: '#fff',
          iconName: 'cancel',
          text: 'Cancel',
        },
      },
    },
  })
})
define('customHooks/usePerformCrop', [
  'require',
  'exports',
  'recoil',
  'Store',
  'expo-image-manipulator',
  'react-native',
], function (
  require,
  exports,
  recoil_2,
  Store_1,
  ImageManipulator,
  react_native_3,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.usePerformCrop = void 0
  ImageManipulator = __importStar(ImageManipulator)
  const usePerformCrop = () => {
    const [accumulatedPan] = (0, recoil_2.useRecoilState)(
      Store_1.accumulatedPanState,
    )
    const [imageBounds] = (0, recoil_2.useRecoilState)(Store_1.imageBoundsState)
    const [imageScaleFactor] = (0, recoil_2.useRecoilState)(
      Store_1.imageScaleFactorState,
    )
    const [cropSize] = (0, recoil_2.useRecoilState)(Store_1.cropSizeState)
    const [, setProcessing] = (0, recoil_2.useRecoilState)(
      Store_1.processingState,
    )
    const [imageData, setImageData] = (0, recoil_2.useRecoilState)(
      Store_1.imageDataState,
    )
    const [, setEditingMode] = (0, recoil_2.useRecoilState)(
      Store_1.editingModeState,
    )
    return async () => {
      try {
        const croppingBounds = {
          originX: Math.round(
            (accumulatedPan.x - imageBounds.x) * imageScaleFactor,
          ),
          originY: Math.round(
            (accumulatedPan.y - imageBounds.y) * imageScaleFactor,
          ),
          width: Math.round(cropSize.width * imageScaleFactor),
          height: Math.round(cropSize.height * imageScaleFactor),
        }
        setProcessing(true)
        const cropResult = await ImageManipulator.manipulateAsync(
          imageData.uri,
          [{ crop: croppingBounds }],
        )
        const { uri, width, height } = cropResult
        setImageData({ uri, width, height })
        setProcessing(false)
        setEditingMode('operation-select')
      } catch (error) {
        setProcessing(false)
        react_native_3.Alert.alert('An error occurred while editing.')
      }
    }
  }
  exports.usePerformCrop = usePerformCrop
})
define('ControlBar', [
  'require',
  'exports',
  'react',
  'react-native',
  'recoil',
  'components/IconButton',
  'context/editor',
  'customHooks/usePerformCrop',
  'Store',
], function (
  require,
  exports,
  react_3,
  react_native_4,
  recoil_3,
  IconButton_1,
  editor_1,
  usePerformCrop_1,
  Store_2,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.ControlBar = void 0
  react_3 = __importStar(react_3)
  function ControlBar() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m
    const [isEdit, setIsEdit] = (0, recoil_3.useRecoilState)(
      Store_2.isEditState,
    )
    const { controlBar } = (0, recoil_3.useRecoilValue)(
      Store_2.editorOptionsState,
    )
    const { onBackPress, onSave } = (0, react_3.useContext)(
      editor_1.EditorContext,
    )
    const performCrop = (0, usePerformCrop_1.usePerformCrop)()
    const onEditDone = async () => {
      await performCrop()
      setIsEdit(true)
    }
    return (
      <react_native_4.View
        style={[
          styles.container,
          {
            backgroundColor:
              controlBar === null || controlBar === void 0
                ? void 0
                : controlBar.backgroundColor,
            height:
              controlBar === null || controlBar === void 0
                ? void 0
                : controlBar.height,
          },
        ]}
      >
        <IconButton_1.IconButton
          iconID={
            !isEdit
              ? (_a =
                  controlBar === null || controlBar === void 0
                    ? void 0
                    : controlBar.cancelButton) === null || _a === void 0
                ? void 0
                : _a.iconName
              : (_b =
                  controlBar === null || controlBar === void 0
                    ? void 0
                    : controlBar.backButton) === null || _b === void 0
              ? void 0
              : _b.iconName
          }
          color={
            !isEdit
              ? (_c =
                  controlBar === null || controlBar === void 0
                    ? void 0
                    : controlBar.cancelButton) === null || _c === void 0
                ? void 0
                : _c.color
              : (_d =
                  controlBar === null || controlBar === void 0
                    ? void 0
                    : controlBar.backButton) === null || _d === void 0
              ? void 0
              : _d.color
          }
          text={
            !isEdit
              ? (_e =
                  controlBar === null || controlBar === void 0
                    ? void 0
                    : controlBar.cancelButton) === null || _e === void 0
                ? void 0
                : _e.text
              : (_f =
                  controlBar === null || controlBar === void 0
                    ? void 0
                    : controlBar.backButton) === null || _f === void 0
              ? void 0
              : _f.text
          }
          onPress={() => {
            onBackPress()
            setIsEdit(false)
          }}
        />
        {!isEdit ? (
          <IconButton_1.IconButton
            iconID={
              (_g =
                controlBar === null || controlBar === void 0
                  ? void 0
                  : controlBar.cropButton) === null || _g === void 0
                ? void 0
                : _g.iconName
            }
            text={
              (_h =
                controlBar === null || controlBar === void 0
                  ? void 0
                  : controlBar.cropButton) === null || _h === void 0
                ? void 0
                : _h.text
            }
            color={
              (_j =
                controlBar === null || controlBar === void 0
                  ? void 0
                  : controlBar.cropButton) === null || _j === void 0
                ? void 0
                : _j.color
            }
            onPress={onEditDone}
          />
        ) : (
          <IconButton_1.IconButton
            iconID={
              (_k =
                controlBar === null || controlBar === void 0
                  ? void 0
                  : controlBar.saveButton) === null || _k === void 0
                ? void 0
                : _k.iconName
            }
            text={
              (_l =
                controlBar === null || controlBar === void 0
                  ? void 0
                  : controlBar.saveButton) === null || _l === void 0
                ? void 0
                : _l.text
            }
            color={
              (_m =
                controlBar === null || controlBar === void 0
                  ? void 0
                  : controlBar.saveButton) === null || _m === void 0
                ? void 0
                : _m.color
            }
            onPress={onSave}
          />
        )}
      </react_native_4.View>
    )
  }
  exports.ControlBar = ControlBar
  const styles = react_native_4.StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 4,
    },
  })
})
define('ImageCropOverlay', [
  'require',
  'exports',
  'react',
  'react-native',
  'react-native-gesture-handler',
  'recoil',
  'context/editor',
  'Store',
], function (
  require,
  exports,
  react_4,
  react_native_5,
  react_native_gesture_handler_1,
  recoil_4,
  editor_2,
  Store_3,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.ImageCropOverlay = void 0
  const horizontalSections = ['top', 'middle', 'bottom']
  const verticalSections = ['left', 'middle', 'right']
  const ImageCropOverlay = () => {
    const [selectedFrameSection, setSelectedFrameSection] = (0,
    react_4.useState)('')
    const [cropSize, setCropSize] = (0, recoil_4.useRecoilState)(
      Store_3.cropSizeState,
    )
    const [imageBounds] = (0, recoil_4.useRecoilState)(Store_3.imageBoundsState)
    const [accumulatedPan, setAccumulatedPan] = (0, recoil_4.useRecoilState)(
      Store_3.accumulatedPanState,
    )
    const { gridOverlayColor, coverMarker, overlayCropColor } = (0,
    recoil_4.useRecoilValue)(Store_3.editorOptionsState)
    const { fixedAspectRatio, minimumCropDimensions } = (0, react_4.useContext)(
      editor_2.EditorContext,
    )
    const [animatedCropSize] = (0, react_4.useState)({
      width: new react_native_5.Animated.Value(cropSize.width),
      height: new react_native_5.Animated.Value(cropSize.height),
    })
    const panX = (0, react_4.useRef)(
      new react_native_5.Animated.Value(imageBounds.x),
    )
    const panY = (0, react_4.useRef)(
      new react_native_5.Animated.Value(imageBounds.y),
    )
    ;(0, react_4.useEffect)(() => {
      checkCropBounds({
        translationX: 0,
        translationY: 0,
      })
      animatedCropSize.height.setValue(cropSize.height)
      animatedCropSize.width.setValue(cropSize.width)
    }, [cropSize])
    ;(0, react_4.useEffect)(() => {
      const newSize = { width: 0, height: 0 }
      const { width, height } = imageBounds
      const imageAspectRatio = width / height
      if (fixedAspectRatio < imageAspectRatio) {
        newSize.height = height
        newSize.width = height * fixedAspectRatio
      } else {
        newSize.width = width
        newSize.height = width / fixedAspectRatio
      }
      setCropSize(newSize)
    }, [imageBounds])
    const isMovingSection = () =>
      selectedFrameSection === 'topmiddle' ||
      selectedFrameSection === 'middleleft' ||
      selectedFrameSection === 'middleright' ||
      selectedFrameSection === 'middlemiddle' ||
      selectedFrameSection === 'bottommiddle'
    const isLeft = selectedFrameSection.endsWith('left')
    const isTop = selectedFrameSection.startsWith('top')
    const onOverlayMove = ({ nativeEvent }) => {
      if (selectedFrameSection !== '') {
        if (isMovingSection()) {
          react_native_5.Animated.event(
            [
              {
                translationX: panX.current,
                translationY: panY.current,
              },
            ],
            { useNativeDriver: false },
          )(nativeEvent)
        } else {
          const { x, y } = getTargetCropFrameBounds(nativeEvent)
          if (isTop) {
            panY.current.setValue(-y)
          }
          if (isLeft) {
            panX.current.setValue(-x)
          }
          animatedCropSize.width.setValue(cropSize.width + x)
          animatedCropSize.height.setValue(cropSize.height + y)
        }
      } else {
        const { x, y } = nativeEvent
        const { width: initialWidth, height: initialHeight } = cropSize
        let position = ''
        if (y / initialHeight < 0.333) {
          position = position + 'top'
        } else if (y / initialHeight < 0.667) {
          position = position + 'middle'
        } else {
          position = position + 'bottom'
        }
        if (x / initialWidth < 0.333) {
          position = position + 'left'
        } else if (x / initialWidth < 0.667) {
          position = position + 'middle'
        } else {
          position = position + 'right'
        }
        setSelectedFrameSection(position)
      }
    }
    const getTargetCropFrameBounds = ({ translationX, translationY }) => {
      let x = 0
      let y = 0
      if (translationX && translationY) {
        if (translationX < translationY) {
          x = (isLeft ? -1 : 1) * translationX
          y = x / fixedAspectRatio
        } else {
          y = (isTop ? -1 : 1) * translationY
          x = y * fixedAspectRatio
        }
      }
      return { x, y }
    }
    const onOverlayRelease = (nativeEvent) => {
      isMovingSection()
        ? checkCropBounds(nativeEvent)
        : checkResizeBounds(nativeEvent)
      setSelectedFrameSection('')
    }
    const onHandlerStateChange = ({ nativeEvent }) => {
      if (nativeEvent.state === react_native_gesture_handler_1.State.END)
        onOverlayRelease(nativeEvent)
    }
    const checkCropBounds = ({ translationX, translationY }) => {
      let accDx = accumulatedPan.x + translationX
      if (accDx <= imageBounds.x) {
        accDx = imageBounds.x
      } else if (accDx + cropSize.width > imageBounds.width + imageBounds.x) {
        accDx = imageBounds.x + imageBounds.width - cropSize.width
      }
      let accDy = accumulatedPan.y + translationY
      if (accDy <= imageBounds.y) {
        accDy = imageBounds.y
      } else if (accDy + cropSize.height > imageBounds.height + imageBounds.y) {
        accDy = imageBounds.y + imageBounds.height - cropSize.height
      }
      panX.current.setValue(0)
      panY.current.setValue(0)
      setAccumulatedPan({ x: accDx, y: accDy })
    }
    const checkResizeBounds = ({ translationX, translationY }) => {
      let { width: maxWidth, height: maxHeight } = imageBounds
      const { width: minWidth, height: minHeight } = minimumCropDimensions
      const height = maxWidth / fixedAspectRatio
      if (maxHeight > height) maxHeight = height
      const width = maxHeight * fixedAspectRatio
      if (maxWidth > width) maxWidth = width
      const { x, y } = getTargetCropFrameBounds({ translationX, translationY })
      const animatedWidth = cropSize.width + x
      const animatedHeight = cropSize.height + y
      let finalHeight = animatedHeight
      let finalWidth = animatedWidth
      if (animatedHeight > maxHeight) {
        finalHeight = maxHeight
        finalWidth = finalHeight * fixedAspectRatio
      } else if (animatedHeight < minHeight) {
        finalHeight = minHeight
        finalWidth = finalHeight * fixedAspectRatio
      }
      if (animatedWidth > maxWidth) {
        finalWidth = maxWidth
        finalHeight = maxHeight
      } else if (animatedWidth < minWidth) {
        finalWidth = minWidth
        finalHeight = finalWidth / fixedAspectRatio
      }
      setAccumulatedPan({
        x: accumulatedPan.x + (isLeft ? -x : 0),
        y: accumulatedPan.y + (isTop ? -y : 0),
      })
      panX.current.setValue(0)
      panY.current.setValue(0)
      setCropSize({
        height: finalHeight,
        width: finalWidth,
      })
    }
    return (
      <react_native_5.View style={styles.container}>
        <react_native_gesture_handler_1.GestureHandlerRootView
          style={{ flex: 1 }}
        >
          <react_native_gesture_handler_1.PanGestureHandler
            onGestureEvent={onOverlayMove}
            onHandlerStateChange={(e) => onHandlerStateChange(e)}
          >
            <react_native_5.Animated.View
              style={[
                styles.overlay,
                {
                  backgroundColor: overlayCropColor,
                  borderColor: gridOverlayColor,
                },
                animatedCropSize,
                {
                  transform: [
                    {
                      translateX: react_native_5.Animated.add(
                        panX.current,
                        accumulatedPan.x,
                      ),
                    },
                    {
                      translateY: react_native_5.Animated.add(
                        panY.current,
                        accumulatedPan.y,
                      ),
                    },
                  ],
                },
              ]}
            >
              {horizontalSections.map((horizontalSection) => {
                return (
                  <react_native_5.View
                    style={styles.sectionRow}
                    key={horizontalSection}
                  >
                    {verticalSections.map((verticalSection) => {
                      const key = horizontalSection + verticalSection
                      return (
                        <react_native_5.View
                          style={[
                            styles.defaultSection,
                            { borderColor: gridOverlayColor },
                          ]}
                          key={key}
                        >
                          {key === 'topleft' ||
                          key === 'topright' ||
                          key === 'bottomleft' ||
                          key === 'bottomright'
                            ? (coverMarker === null || coverMarker === void 0
                                ? void 0
                                : coverMarker.show) && (
                                <react_native_5.View
                                  style={[
                                    styles.cornerMarker,
                                    {
                                      borderColor:
                                        coverMarker === null ||
                                        coverMarker === void 0
                                          ? void 0
                                          : coverMarker.color,
                                    },
                                    horizontalSection === 'top'
                                      ? { top: -4, borderTopWidth: 7 }
                                      : { bottom: -4, borderBottomWidth: 7 },
                                    verticalSection === 'left'
                                      ? { left: -4, borderLeftWidth: 7 }
                                      : { right: -4, borderRightWidth: 7 },
                                  ]}
                                />
                              )
                            : null}
                        </react_native_5.View>
                      )
                    })}
                  </react_native_5.View>
                )
              })}
            </react_native_5.Animated.View>
          </react_native_gesture_handler_1.PanGestureHandler>
        </react_native_gesture_handler_1.GestureHandlerRootView>
      </react_native_5.View>
    )
  }
  exports.ImageCropOverlay = ImageCropOverlay
  const styles = react_native_5.StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    overlay: {
      height: 40,
      width: 40,
      borderWidth: 1,
    },
    sectionRow: {
      flexDirection: 'row',
      flex: 1,
    },
    defaultSection: {
      flex: 1,
      borderWidth: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cornerMarker: {
      position: 'absolute',
      height: 30,
      width: 30,
    },
  })
})
define('EditingWindow', [
  'require',
  'exports',
  'react',
  'react-native',
  'recoil',
  'ImageCropOverlay',
  'Store',
], function (
  require,
  exports,
  react_5,
  react_native_6,
  recoil_5,
  ImageCropOverlay_1,
  Store_4,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.EditingWindow = void 0
  react_5 = __importStar(react_5)
  function EditingWindow() {
    const [imageLayout, setImageLayout] = (0, react_5.useState)(null)
    const [imageData] = (0, recoil_5.useRecoilState)(Store_4.imageDataState)
    const [, setImageBounds] = (0, recoil_5.useRecoilState)(
      Store_4.imageBoundsState,
    )
    const [, setImageScaleFactor] = (0, recoil_5.useRecoilState)(
      Store_4.imageScaleFactorState,
    )
    const [editingMode] = (0, recoil_5.useRecoilState)(Store_4.editingModeState)
    const isCropping = editingMode === 'crop'
    const getImageFrame = (layout) => {
      onUpdateCropLayout(layout)
    }
    const onUpdateCropLayout = (layout) => {
      if (layout) {
        const editingWindowAspectRatio = layout.height / layout.width
        const imageAspectRatio = imageData.height / imageData.width
        const bounds = { x: 0, y: 0, width: 0, height: 0 }
        let imageScaleFactor = 1
        if (imageAspectRatio > editingWindowAspectRatio) {
          bounds.x =
            (((imageAspectRatio - editingWindowAspectRatio) /
              imageAspectRatio) *
              layout.width) /
            2
          bounds.width = layout.height / imageAspectRatio
          bounds.height = layout.height
          imageScaleFactor = imageData.height / layout.height
        } else {
          bounds.y =
            (((1 / imageAspectRatio - 1 / editingWindowAspectRatio) /
              (1 / imageAspectRatio)) *
              layout.height) /
            2
          bounds.width = layout.width
          bounds.height = layout.width * imageAspectRatio
          imageScaleFactor = imageData.width / layout.width
        }
        setImageBounds(bounds)
        setImageScaleFactor(imageScaleFactor)
        setImageLayout({
          height: layout.height,
          width: layout.width,
        })
      }
    }
    ;(0, react_5.useEffect)(() => {
      onUpdateCropLayout(imageLayout)
    }, [imageData])
    return (
      <react_native_6.View style={styles.container}>
        <react_native_6.Image
          style={styles.image}
          source={{ uri: imageData.uri }}
          onLayout={({ nativeEvent }) => getImageFrame(nativeEvent.layout)}
        />
        {isCropping && imageLayout != null ? (
          <ImageCropOverlay_1.ImageCropOverlay />
        ) : null}
      </react_native_6.View>
    )
  }
  exports.EditingWindow = EditingWindow
  const styles = react_native_6.StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: 'contain',
    },
    glContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
})
define('Processing', ['require', 'exports', 'react-native'], function (
  require,
  exports,
  react_native_7,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.Processing = void 0
  function Processing({ color = '#FFF', size = 'large', customComponent }) {
    return (
      <react_native_7.View style={styles.container}>
        {customComponent !== null && customComponent !== void 0 ? (
          customComponent
        ) : (
          <react_native_7.ActivityIndicator color={color} size={size} />
        )}
      </react_native_7.View>
    )
  }
  exports.Processing = Processing
  const styles = react_native_7.StyleSheet.create({
    container: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: '#33333355',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
})
define('index', [
  'require',
  'exports',
  'expo-image-manipulator',
  'react',
  'react-native',
  'recoil',
  'context/editor',
  'ControlBar',
  'EditingWindow',
  'Processing',
  'Store',
], function (
  require,
  exports,
  ImageManipulator,
  react_6,
  react_native_8,
  recoil_6,
  editor_3,
  ControlBar_1,
  EditingWindow_1,
  Processing_1,
  Store_5,
) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.ImageEditor = exports.ImageEditorView = void 0
  ImageManipulator = __importStar(ImageManipulator)
  function ImageEditorCore(props) {
    const {
      minimumCropDimensions = { width: 100, height: 100 },
      fixedAspectRatio = 0.66666666666,
      onEditingCancel,
      onEditingComplete,
      imageUri = null,
      processingComponent,
      editorOptions,
    } = props
    const [options, setOptions] = (0, recoil_6.useRecoilState)(
      Store_5.editorOptionsState,
    )
    const [imageData, setImageData] = (0, recoil_6.useRecoilState)(
      Store_5.imageDataState,
    )
    const [, setReady] = (0, recoil_6.useRecoilState)(Store_5.readyState)
    const [, setEditingMode] = (0, recoil_6.useRecoilState)(
      Store_5.editingModeState,
    )
    const [, setProcessing] = (0, recoil_6.useRecoilState)(
      Store_5.processingState,
    )
    const [isEdit] = (0, recoil_6.useRecoilState)(Store_5.isEditState)
    const initialize = (0, react_6.useCallback)(async () => {
      setProcessing(true)
      if (imageUri) {
        const { width: pickerWidth, height: pickerHeight } =
          await ImageManipulator.manipulateAsync(imageUri, [])
        setImageData({
          uri: imageUri,
          width: pickerWidth,
          height: pickerHeight,
        })
        setReady(true)
        setProcessing(false)
      }
    }, [])
    const onBackPress = () => {
      if (!isEdit) {
        onEditingCancel()
      } else {
        setProcessing(true)
        initialize().then(() => {
          setEditingMode('crop')
          setProcessing(false)
        })
      }
    }
    const onSave = () => {
      onEditingComplete(imageData)
    }
    ;(0, react_6.useEffect)(() => {
      initialize().then(setCustomStyles).catch(console.error)
    }, [imageUri])
    function setCustomStyles() {
      if (editorOptions) {
        const custom = Object.assign({}, options)
        Object.entries(editorOptions).forEach(([key, value]) => {
          if (key) {
            if (typeof custom[key] === 'object' && custom[key] !== null) {
              custom[key] = { ...custom[key], ...value }
            } else {
              custom[key] = value
            }
          }
        })
        setOptions(custom)
      }
    }
    return (
      <editor_3.EditorContext.Provider
        value={{
          minimumCropDimensions,
          fixedAspectRatio,
          onBackPress,
          onSave,
          imageUri,
        }}
      >
        <react_native_8.StatusBar hidden={true} />
        <ImageEditorView processingComponent={processingComponent} />
      </editor_3.EditorContext.Provider>
    )
  }
  function ImageEditorView({ processingComponent }) {
    const [ready] = (0, recoil_6.useRecoilState)(Store_5.readyState)
    const [processing] = (0, recoil_6.useRecoilState)(Store_5.processingState)
    const { backgroundColor, controlBar } = (0, recoil_6.useRecoilValue)(
      Store_5.editorOptionsState,
    )
    return (
      <>
        {ready && (
          <react_native_8.View style={[styles.container, { backgroundColor }]}>
            {(controlBar === null || controlBar === void 0
              ? void 0
              : controlBar.position) === 'top' && <ControlBar_1.ControlBar />}
            <EditingWindow_1.EditingWindow />
            {(controlBar === null || controlBar === void 0
              ? void 0
              : controlBar.position) === 'bottom' && (
              <ControlBar_1.ControlBar />
            )}
          </react_native_8.View>
        )}

        {processing && (
          <Processing_1.Processing customComponent={processingComponent} />
        )}
      </>
    )
  }
  exports.ImageEditorView = ImageEditorView
  function ImageEditor({ isVisible, ...props }) {
    return (
      <react_native_8.Modal visible={isVisible} style={styles.modalContainer}>
        <recoil_6.RecoilRoot>
          <ImageEditorCore {...props} />
        </recoil_6.RecoilRoot>
      </react_native_8.Modal>
    )
  }
  exports.ImageEditor = ImageEditor
  const styles = react_native_8.StyleSheet.create({
    container: {
      flex: 1,
    },
    modalContainer: {
      flex: 1,
      zIndex: 1,
    },
  })
})
//# sourceMappingURL=index.js.map
