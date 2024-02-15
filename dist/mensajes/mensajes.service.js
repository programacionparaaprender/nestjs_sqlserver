"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mensaje_entity_1 = require("./entities/mensaje.entity");
let MensajesService = class MensajesService {
    constructor(mensajeRepository) {
        this.mensajeRepository = mensajeRepository;
    }
    async getAll() {
        return await this.mensajeRepository.find();
    }
    async deleteMensaje(id) {
        return await this.mensajeRepository.delete(id);
    }
    async createMensaje(mensajeNuevo) {
        const nuevo = new mensaje_entity_1.Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;
        return this.mensajeRepository.save(nuevo);
    }
    async getMensaje(id) {
        const mensajeUpdate = await this.mensajeRepository.findOne(id);
        var mensaje;
        mensaje.mensaje = mensajeUpdate.mensaje;
        mensaje.nick = mensajeUpdate.nick;
        mensaje.id = mensajeUpdate.id;
        return mensaje;
    }
    async updateMensaje(id, mensajeNuevo) {
        const mensajeUpdate = await this.mensajeRepository.findOne(id);
        mensajeUpdate.mensaje = mensajeNuevo.mensaje;
        mensajeUpdate.nick = mensajeNuevo.nick;
        return this.mensajeRepository.save(mensajeUpdate);
    }
    findAll() {
        return this.mensajeRepository.find();
    }
};
MensajesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(mensaje_entity_1.Mensaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MensajesService);
exports.MensajesService = MensajesService;
//# sourceMappingURL=mensajes.service.js.map