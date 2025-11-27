import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'

const Ring = () =>{
    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);


        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

         if(window.innerWidth>=1100){
            sizes.width = window.innerWidth/3
            sizes.height = window.innerHeight/1.5
            }else if(window.innerWidth>768 && window.innerWidth<1100){
            sizes.width = window.innerWidth/2.5
            sizes.height = window.innerHeight/1.5
            }else if(window.innerWidth>450 && window.innerWidth<=768){
            sizes.width = window.innerWidth/2.5
            sizes.height = window.innerHeight/3
            }else if(window.innerWidth<=450){
            sizes.width = window.innerWidth/1.2
            sizes.height = window.innerHeight/3
            }


        window.addEventListener('resize', () =>
            {
                
                // Update sizes
                
                if(window.innerWidth>=1100){
                    sizes.width = window.innerWidth/3
                    sizes.height = window.innerHeight/1.5
                }else if(window.innerWidth>768 && window.innerWidth<1100){
                    sizes.width = window.innerWidth/2.5
                    sizes.height = window.innerHeight/1.5
                }else if(window.innerWidth>450 && window.innerWidth<=768){
                    sizes.width = window.innerWidth/2.5
                    sizes.height = window.innerHeight/3
                }else if(window.innerWidth<=450){
                    sizes.width = window.innerWidth/1.2
                    sizes.height = window.innerHeight/3
                }
                

                // Update camera
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()

                // Update renderer
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

        /**
         * Base
         */
        // Debug
        const gui = new dat.GUI()
        gui.hide()

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Models
         */
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        let mixer = null

        gltfLoader.load(
            '/3dModels/ring4.glb',
            (gltf) =>
            {
                // gltf.scene.scale.set(18.3, 18.3, 18.3)
                gltf.scene.scale.set(10, 10, 10)
                console.log(gltf)
                const can = gltf.scene
                scene.add(gltf.scene)
                can.rotation.y = 0.8
                can.rotation.z = 0.26
                

                const box = new THREE.Box3().setFromObject(can);
                const center = new THREE.Vector3();
                box.getCenter(center);
                can.position.sub(center);

                can.position.y = 0.8
                // Animation
                // mixer = new THREE.AnimationMixer(gltf.scene)
                // const action = mixer.clipAction(gltf.animations[2])
                // action.play()

                gsap.to(can.rotation, { duration: 2, y: 2 ,
                    scrollTrigger:{
                        trigger: ".webgl",
                        scrub: 2.5,
                        start: "5% 20%",
                        end: "bottom 50%",
                        // markers: true,
                
                
                    }
                });
                // gsap.to(can.position, { duration: 2, y: 7 ,
                //     scrollTrigger:{
                //         trigger: ".page2",
                //         scrub: 2.5,
                //         start: "15% 15%",
                //         end: "bottom top",
                //         // markers: true,
                
                
                //     }
                // });
                
            
            }
        )
        

       

        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.set(1024, 1024)
        directionalLight.shadow.camera.far = 15
        directionalLight.shadow.camera.left = - 7
        directionalLight.shadow.camera.top = 7
        directionalLight.shadow.camera.right = 7
        directionalLight.shadow.camera.bottom = - 7
        directionalLight.position.set(- 5, 0, 0)
        scene.add(directionalLight)

        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8)
        directionalLight1.castShadow = true
        directionalLight1.shadow.mapSize.set(1024, 1024)
        directionalLight1.shadow.camera.far = 15
        directionalLight1.shadow.camera.left = - 7
        directionalLight1.shadow.camera.top = 7
        directionalLight1.shadow.camera.right = 7
        directionalLight1.shadow.camera.bottom = - 7
        directionalLight1.position.set( 5, 2, 0)
        scene.add(directionalLight1)

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.1)
        directionalLight2.castShadow = true
        directionalLight2.shadow.mapSize.set(1024, 1024)
        directionalLight2.shadow.camera.far = 15
        directionalLight2.shadow.camera.left = - 7
        directionalLight2.shadow.camera.top = 7
        directionalLight2.shadow.camera.right = 7
        directionalLight2.shadow.camera.bottom = - 7
        directionalLight2.position.set( 5, -5, 0)
        scene.add(directionalLight2)


        // const hemiSphericalLight = new THREE.HemisphereLight("white", "grey", 1)
        // scene.add(hemiSphericalLight)
        /**
         * Sizes
         */
        // const sizes = {
        //     width: window.innerWidth,
        //     height: window.innerHeight
        // }

        const cursor = {
            x:window.scrollX/window.innerWidth-0.5,
            y:window.scrollY/window.innerHeight-0.5
        }

        //scroll
        window.addEventListener("scroll", ()=>{
            cursor.x = window.scrollX/window.innerWidth-0.5
            cursor.y = -(window.scrollY/window.innerHeight-0.5)
            console.log(cursor.y)
        })

        window.addEventListener('resize', () =>
        {
            //scroll
            
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.set(2, 2, 2)
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.target.set(0, 0.75, 0)
        controls.enableDamping = true
        controls.enableZoom = false
        controls.enableRotate = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */
        const clock = new THREE.Clock()
        let previousTime = 0

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            //camera movement
            window.addEventListener("scroll", ()=>{
                
            })

            //update lights
            window.addEventListener("mousemove", (e) =>{
                directionalLight2.position.x = -(e.clientX/window.innerWidth-0.5)*2
                directionalLight2.position.y = (e.clientY/window.innerWidth-0.5)*2
            })

            // Model animation
            if(mixer)
            {
                mixer.update(deltaTime)
            }

            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()

    })

    return (
        <div className='webglContainer'><canvas className="webgl"></canvas></div>
    )
}

export default Ring


////////////////////canvas2////////////////////


