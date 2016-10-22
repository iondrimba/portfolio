/* global THREE */
/* global Detector */
define(['views/AnimateColors'], function (AnimateColors) {
    var Grid3D = function (app) {
        this.el = 'grid3d';
        this.$$ = app.$$;
        this.completed = false;

        this.initialize = function () {            

            this.camera;
            this.scene;
            this.renderer;
            this.mouseX = 0;
            this.mouseY = 0;

            this.ambient;
            this.materials;
            this.materialsAux;
            this.light;

            this.colors = [];
            this.colors[0] = { materialColor: '#094AAE', specularColor: '#1BE4DC' };
            this.colors[1] = { materialColor: '#ff0000', specularColor: '#ff6a00' };
            this.colors[2] = { materialColor: '#094AAE', specularColor: '#ff0000' };
            this.colors[3] = { materialColor: '#01052e', specularColor: '#094AAE' };
            this.colors[4] = { materialColor: '#240058', specularColor: '#ff7c0d' };
            this.colors[5] = { materialColor: '#240058', specularColor: '#4cff00' };
            this.colors[6] = { materialColor: '#000000', specularColor: '#4e4e4e' };
            this.colors[7] = { materialColor: '#01273d', specularColor: '#8500fa' };

            this.colorIndex = 0;
            this.baseColor = '#000';
            this.ambientColor = '#000';
            this.directionalColor = '#fff';
            this.materialColor = this.colors[this.colorIndex].materialColor;
            this.specularColor = this.colors[this.colorIndex].specularColor;

            this.objPlain;
            this.objUp;
            this.objDown;
            this.gridGroup;

            this.executed = false;
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;

        };

        this.onMouseMove = function (event) {
            this.mouseX = (event.clientX - this.windowHalfX) * 10;
            this.mouseY = (event.clientY - this.windowHalfY) * 10;
        };

        this.onWindowResize = function () {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;

            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
        };

        this.initGrid = function () {
            
            
            window.addEventListener('mousemove', this.onMouseMove.bind(this));

            window.addEventListener('resize', this.onWindowResize.bind(this), false);

            this.container = document.getElementsByClassName(this.el)[0];

            this.gridGroup = new THREE.Object3D();
            
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            this.renderer.setClearColor(this.baseColor, 1);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.container.appendChild(this.renderer.domElement);

            this.scene = new THREE.Scene();            
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
            this.camera.position.set(0, 0, 500);

            this.camera.target = new THREE.Vector3();

            this.ambient = new THREE.AmbientLight(this.ambientColor);
            this.scene.add(this.ambient);

            this.light = new THREE.DirectionalLight(this.directionalColor, 0.3);
            this.light.position.set(0, 200, 500);
            this.scene.add(this.light);

            this.materials = [];

            this.materialsAux = [];

            this.materials.push(new THREE.MeshPhongMaterial({ color: this.materialColor, specular: this.specularColor, shininess: 30, shading: THREE.FlatShading, side: THREE.DoubleSide }));

            this.objPlain = this.addPlainObj(this.scene, this.materials);

            this.objUp = this.addExtrudeUpObj(this.scene, this.materials);

            this.objDown = this.addExtrudeDownObj(this.scene, this.materials);

            this.onWindowResize();
        };

        this.addExtrudeUpObj = function (scene, materials) {
            var triangleMaterial = materials[0],
                triangleGeometry,
                triangleGeometry1,
                triangleGeometry2,
                triangleGeometry3,
                triangleGeometry4,
                triangleGeometry5,
                triangleMesh0,
                triangleMesh1,
                triangleMesh2,
                triangleMesh3,
                triangleMesh4,
                triangleMesh5,
                obj;

            triangleGeometry = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 50, 0), new THREE.Vector3(0, -52.5, 0)]);
            triangleGeometry1 = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -52.5, 0), new THREE.Vector3(0, 50, 0)]);
            triangleGeometry2 = this.positionVertices([new THREE.Vector3(0, -48, 0), new THREE.Vector3(0, 48, 0), new THREE.Vector3(53.9, 0, 0)]);
            triangleGeometry3 = this.positionVertices([new THREE.Vector3(-53.9, 0, 0), new THREE.Vector3(0, 48, 0), new THREE.Vector3(0, -48, 0)]);
            triangleGeometry4 = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -50, 0), new THREE.Vector3(0, 52.5, 0)]);
            triangleGeometry5 = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 52.5, 0), new THREE.Vector3(0, -50, 0)]);

            triangleMesh0 = new THREE.Mesh(triangleGeometry, triangleMaterial);
            triangleMesh0.name = 'triangleMesh0';

            triangleMesh1 = new THREE.Mesh(triangleGeometry1, triangleMaterial);
            triangleMesh1.name = 'triangleMesh1';

            triangleMesh2 = new THREE.Mesh(triangleGeometry2, triangleMaterial);
            triangleMesh2.name = 'triangleMesh2';
            triangleMesh2.position.y = -50;
            triangleMesh2.position.x = -50;

            triangleMesh3 = new THREE.Mesh(triangleGeometry3, triangleMaterial);
            triangleMesh3.name = 'triangleMesh3';
            triangleMesh3.position.y = -50;
            triangleMesh3.position.x = 50;

            triangleMesh4 = new THREE.Mesh(triangleGeometry4, triangleMaterial);
            triangleMesh4.name = 'triangleMesh4';
            triangleMesh4.position.y = -100;
            triangleMesh4.position.x = 0;

            triangleMesh5 = new THREE.Mesh(triangleGeometry5, triangleMaterial);
            triangleMesh5.name = 'triangleMesh5';
            triangleMesh5.position.y = -100;
            triangleMesh5.position.x = 0;

            obj = new THREE.Object3D();
            obj.add(triangleMesh0)
            .add(triangleMesh1)
            .add(triangleMesh2)
            .add(triangleMesh3)
            .add(triangleMesh4)
            .add(triangleMesh5);
            scene.add(obj);

            obj.position.x = -1000;

            return obj;
        };

        this.addExtrudeDownObj = function (scene, materials) {
            var triangleMaterial = materials[0],
                triangleGeometry,
                triangleGeometry1,
                triangleGeometry2,
                triangleGeometry3,
                triangleGeometry4,
                triangleGeometry5,
                obj,
                triangleMesh0,
                triangleMesh1,
                triangleMesh2,
                triangleMesh3,
                triangleMesh4,
                triangleMesh5;

            triangleGeometry = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 50, 0), new THREE.Vector3(0, -52.5, 0)]);
            triangleGeometry1 = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -52.5, 0), new THREE.Vector3(0, 50, 0)]);
            triangleGeometry2 = this.positionVertices([new THREE.Vector3(0, -48, 0), new THREE.Vector3(0, 48, 0), new THREE.Vector3(53.9, 0, 0)]);
            triangleGeometry3 = this.positionVertices([new THREE.Vector3(-53.9, 0, 0), new THREE.Vector3(0, 48, 0), new THREE.Vector3(0, -48, 0)]);
            triangleGeometry4 = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -50, 0), new THREE.Vector3(0, 52.5, 0)]);
            triangleGeometry5 = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 52.5, 0), new THREE.Vector3(0, -50, 0)]);

            triangleMesh0 = new THREE.Mesh(triangleGeometry, triangleMaterial);
            triangleMesh0.name = 'triangleMesh0';

            triangleMesh1 = new THREE.Mesh(triangleGeometry1, triangleMaterial);
            triangleMesh1.name = 'triangleMesh1';

            triangleMesh2 = new THREE.Mesh(triangleGeometry2, triangleMaterial);
            triangleMesh2.name = 'triangleMesh2';
            triangleMesh2.position.y = -50;
            triangleMesh2.position.x = -50;

            triangleMesh3 = new THREE.Mesh(triangleGeometry3, triangleMaterial);
            triangleMesh3.name = 'triangleMesh3';
            triangleMesh3.position.y = -50;
            triangleMesh3.position.x = 50;

            triangleMesh4 = new THREE.Mesh(triangleGeometry4, triangleMaterial);
            triangleMesh4.name = 'triangleMesh4';
            triangleMesh4.position.y = -100;
            triangleMesh4.position.x = 0;

            triangleMesh5 = new THREE.Mesh(triangleGeometry5, triangleMaterial);
            triangleMesh5.name = 'triangleMesh5';
            triangleMesh5.position.y = -100;
            triangleMesh5.position.x = 0;

            obj = new THREE.Object3D();
            obj.add(triangleMesh0)
            .add(triangleMesh1)
            .add(triangleMesh2)
            .add(triangleMesh3)
            .add(triangleMesh4)
            .add(triangleMesh5);
            scene.add(obj);

            obj.position.x = -1000;

            return obj;
        };

        this.addPlainObj = function (scene, materials) {
            var triangleMaterial = materials[0],
                triangleGeometry,
                triangleGeometry1,
                triangleGeometry2,
                triangleGeometry3,
                triangleGeometry4,
                triangleGeometry5,
                triangleMesh0,
                triangleMesh1,
                triangleMesh2,
                triangleMesh3,
                triangleMesh4,
                triangleMesh5,
                group,
                obj;

            triangleGeometry = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 50, 0), new THREE.Vector3(0, -50, 0)]);
            triangleGeometry1 = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -50, 0), new THREE.Vector3(0, 50, 0)]);
            triangleGeometry2 = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -50, 0), new THREE.Vector3(0, 50, 0)]);
            triangleGeometry3 = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 50, 0), new THREE.Vector3(0, -50, 0)]);
            triangleGeometry4 = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -50, 0), new THREE.Vector3(0, 50, 0)]);
            triangleGeometry5 = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 50, 0), new THREE.Vector3(0, -50, 0)]);

            triangleMesh0 = new THREE.Mesh(triangleGeometry, triangleMaterial);
            triangleMesh0.name = 'triangleMesh0';

            triangleMesh1 = new THREE.Mesh(triangleGeometry1, triangleMaterial);
            triangleMesh1.name = 'triangleMesh1';

            triangleMesh2 = new THREE.Mesh(triangleGeometry2, triangleMaterial);
            triangleMesh2.name = 'triangleMesh2';
            triangleMesh2.position.y = -50;
            triangleMesh2.position.x = -50;

            triangleMesh3 = new THREE.Mesh(triangleGeometry3, triangleMaterial);
            triangleMesh3.name = 'triangleMesh3';
            triangleMesh3.position.y = -50;
            triangleMesh3.position.x = 50;

            triangleMesh4 = new THREE.Mesh(triangleGeometry4, triangleMaterial);
            triangleMesh4.name = 'triangleMesh4';
            triangleMesh4.position.y = -100;
            triangleMesh4.position.x = 0;

            triangleMesh5 = new THREE.Mesh(triangleGeometry5, triangleMaterial);
            triangleMesh5.name = 'triangleMesh5';
            triangleMesh5.position.y = -100;
            triangleMesh5.position.x = 0;

            group = new THREE.Object3D();
            group.name = 'group';
            group.add(triangleMesh0)
            .add(triangleMesh1)
            .add(triangleMesh2)
            .add(triangleMesh3)
            .add(triangleMesh4)
            .add(triangleMesh5);

            obj = new THREE.Object3D();
            obj.add(group);
            scene.add(obj);
            obj.position.x = -1000;

            return obj;
        };

        this.positionVertices = function (vector3dList) {
            var triangle = new THREE.Geometry();

            triangle.vertices.push(vector3dList[0]);
            triangle.vertices.push(vector3dList[1]);
            triangle.vertices.push(vector3dList[2]);

            triangle.faces.push(new THREE.Face3(0, 1, 2));

            return triangle;
        };

        this.animate = function () {
            requestAnimationFrame(this.animate.bind(this));
            this.render();
        };

        this.render = function () {
            this.camera.position.x = (this.mouseX - this.camera.position.x) * 0.02;
            this.camera.position.y = (-this.mouseY - this.camera.position.y) * 0.05;

            this.camera.lookAt(this.scene.position);

            this.renderer.render(this.scene, this.camera);
        };

        this.showValXUp = function (obj, index, value) {
            obj.children[index].rotation.x = value;
        };
        this.showValYUp = function (obj, index, value) {
            obj.children[index].rotation.y = value;
        };
        this.showValPXUp = function (obj, index, value) {
            obj.children[index].position.x = value;
        };
        this.showValPYUp = function (obj, index, value) {
            obj.children[index].position.z = value;
        };
        this.showValPZUp = function (obj, index, value) {
            obj.children[index].position.y = value;
        };

        this.animateFaceDown = function (target) {
            var i = 0,
                total = target.children.length,
                targetChild,
                rotation,
                position,
                childDown;

            target.position.z = -30;
            target.position.y = 5;

            for (i; i < total; i++) {
                targetChild = target.children[i];

                rotation = targetChild.rotation;
                position = targetChild.position;
                childDown = this.objDown.children[i];

                rotation.x = childDown.rotation.x;
                rotation.y = childDown.rotation.y;
                rotation.z = childDown.rotation.z;

                position.x = childDown.position.x;
                position.y = childDown.position.y;
                position.z = childDown.position.z;
            }
        };

        this.animateFaceUp = function (target) {
            var i = 0,
                rotation,
                position,
                childUp,
                total = target.children.length,
                targetChild;

            for (i; i < total; i++) {
                targetChild = target.children[i];
                childUp = this.objUp.children[i];

                rotation = targetChild.rotation,
                position = targetChild.position;

                rotation.x = childUp.rotation.x;
                rotation.y = childUp.rotation.y;
                rotation.z = childUp.rotation.z;

                position.x = childUp.position.x;
                position.y = childUp.position.y;
                position.z = childUp.position.z;

                targetChild.geometry.vertices[0].x = childUp.geometry.vertices[0].x;
                targetChild.geometry.vertices[0].y = childUp.geometry.vertices[0].y;
                targetChild.geometry.vertices[0].z = childUp.geometry.vertices[0].z;

                targetChild.geometry.vertices[1].x = childUp.geometry.vertices[1].x;
                targetChild.geometry.vertices[1].y = childUp.geometry.vertices[1].y;
                targetChild.geometry.vertices[1].z = childUp.geometry.vertices[1].z;

                targetChild.geometry.vertices[2].x = childUp.geometry.vertices[2].x;
                targetChild.geometry.vertices[2].y = childUp.geometry.vertices[2].y;
                targetChild.geometry.vertices[2].z = childUp.geometry.vertices[2].z;

                targetChild.geometry.verticesNeedUpdate = true;
            }
        };

        this.prepareGrid = function () {
            var groudSource = new THREE.Object3D();

            groudSource.add(this.objDown)
            .add(this.objUp)
            .add(this.objPlain);

            this.scene.add(groudSource);

            groudSource.position.x = -1000;
        };

        this.buildGrid = function () {
            var posAnterior = 0,
                anchorY = 1000,
                i = 0, 
                cols = 13,
                lines = 25,
                objY;

            for (i; i < cols; i++) {
                posAnterior = -((195) * i) + anchorY;

                if (i > 0) {
                    if ((i % 2 === 0)) {
                        posAnterior = -((196) * i) + anchorY;
                    }
                }

                for (var j = 0; j < lines; j++) {
                    objY = this.objPlain.clone();
                    objY.position.x = -(1150) + 99 * j;

                    if (i % 2) {
                        objY.animated = 'up';
                        this.animateFaceUp(objY.children[0]);
                    } else {
                        objY.animated = 'down';
                        this.animateFaceDown(objY.children[0]);
                    }

                    this.addAuxiliaryFaces(objY);

                    objY.position.y = posAnterior; 

                    this.gridGroup.add(objY);
                }
            }
 
            this.scene.add(this.gridGroup);

            this.gridGroup.rotateZ(-0.4);
            
            this.$$('.grid3d').removeClass('visible-false');
        };

        this.addAuxiliaryFaces = function (pai) {
            var triangleGeometry,
                auxmesh,
                aux,
                triangleGeometryDown,
                auxmeshDown,
                auxDown;

            this.materialsAux.push(new THREE.MeshPhongMaterial({ color: this.materialColor, specular: this.specularColor, shininess: 30, shading: THREE.FlatShading, side: THREE.DoubleSide }));

            triangleGeometry = this.positionVertices([new THREE.Vector3(50, 0, 0), new THREE.Vector3(-50, 0, 0), new THREE.Vector3(0, 51, 0)]);
            auxmesh = new THREE.Mesh(triangleGeometry, this.materialsAux[0]);
            auxmesh.name = 'auxmesh';
            aux = new THREE.Object3D();
            aux.add(auxmesh);

            triangleGeometryDown = this.positionVertices([new THREE.Vector3(-50, 0, 0), new THREE.Vector3(50, 0, 0), new THREE.Vector3(0, -51, 0)]);
            auxmeshDown = new THREE.Mesh(triangleGeometryDown, this.materialsAux[0]);
            auxmeshDown.name = 'auxmeshDown';
            auxDown = new THREE.Object3D();
            auxDown.add(auxmeshDown);

            if (pai.animated === 'down') {
                aux.position.y = -143;
                aux.position.x = -49.5;
                aux.position.z = -15;
                aux.rotation.x = -0.18;

                auxDown.position.y = 53;
                auxDown.position.x = -49.5;
                auxDown.rotation.x = 0.18;
                auxDown.position.z = aux.position.z;
            } else if (pai.animated === 'up') {
                aux.position.y = -148;
                aux.position.x = -49.5;
                aux.position.z = -15;
                aux.rotation.x = 0.18;

                auxDown.position.y = 48;
                auxDown.position.x = -49.5;
                auxDown.rotation.x = -0.18;
                auxDown.position.z = aux.position.z;
            } else {
                aux.position.y = -150;
                aux.position.x = -50;

                auxDown.position.y = 50;
                auxDown.position.x = -50;
            }

            pai.add(aux);
            pai.add(auxDown);
        };

        this.execute = function () {
            this.initGrid();

            this.animate();

            this.showValXUp(this.objUp, 0, -0.3);
            this.showValYUp(this.objUp, 0, -0.13);

            this.showValXUp(this.objUp, 1, -0.3);
            this.showValYUp(this.objUp, 1, 0.13);

            this.showValYUp(this.objUp, 2, -0.41);
            this.showValPXUp(this.objUp, 2, -49.61);
            this.showValPYUp(this.objUp, 2, -6);

            this.showValXUp(this.objUp, 4, 0.3);
            this.showValYUp(this.objUp, 4, 0.13);

            this.showValYUp(this.objUp, 3, 0.41);
            this.showValPXUp(this.objUp, 3, 49.61);
            this.showValPYUp(this.objUp, 3, -6);

            this.showValXUp(this.objUp, 5, 0.3);
            this.showValYUp(this.objUp, 5, -0.13);

            /*--------------------------------*/

            this.showValXUp(this.objDown, 0, 0.3);
            this.showValYUp(this.objDown, 0, 0.13);

            this.showValXUp(this.objDown, 1, 0.3);
            this.showValYUp(this.objDown, 1, -0.13);

            this.showValYUp(this.objDown, 2, 0.41);
            this.showValPXUp(this.objDown, 2, -49.61);
            this.showValPYUp(this.objDown, 2, 6);

            this.showValXUp(this.objDown, 4, -0.3);
            this.showValYUp(this.objDown, 4, -0.13);

            this.showValYUp(this.objDown, 3, -0.41);
            this.showValPXUp(this.objDown, 3, 49.61);
            this.showValPYUp(this.objDown, 3, 6);

            this.showValXUp(this.objDown, 5, -0.3);
            this.showValYUp(this.objDown, 5, 0.13);

            this.prepareGrid();

            this.buildGrid();

            this.animateColors = new AnimateColors(this);
            this.animateColors.execute();

            this.executed = true;
        };

        this.initialize();
    };
    return Grid3D;
});